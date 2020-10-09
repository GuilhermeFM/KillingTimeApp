using kta_core._Exceptions;
using kta_core.Models;
using kta_core.Models.Payloads;
using kta_core.Models.Settings;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace kta_core.Services
{
    public class AuthenticateService
    {
        #region Deps

        private readonly AuthenticateServiceSettings _settings;
        private readonly UserManager<User> _userManager;

        #endregion

        #region Constructors

        public AuthenticateService(IOptions<AuthenticateServiceSettings> settings, UserManager<User> userManager)
        {
            this._settings = settings.Value;
            this._userManager = userManager;
        }

        #endregion

        public async Task<string> SignUpAsync(string fullname, string email, string password)
        {
            var user = new User
            {
                Fullname = fullname,
                UserName = email,
                Email = email,

                SecurityStamp = Guid.NewGuid().ToString(),
            };

            var result = await _userManager.CreateAsync(user, password);
            if (!result.Succeeded)
            {
                var error = result.Errors.First();

                if (error.Code == nameof(IdentityErrorDescriber.DuplicateEmail))
                    throw new UserSignUpException(error, "Email already registered.");

                if (error.Code == nameof(IdentityErrorDescriber.PasswordTooShort))
                    throw new UserSignUpException(error, "Password needs to be at least 6 character long.");

                throw new UserSignUpException(error, "Failed to create user.");
            }

            var confirmationEmailToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var payload = new PayloadEmail { Token = confirmationEmailToken, EmailAddress = user.Email };
            var payloadJson = JsonConvert.SerializeObject(payload);
            var payloadJsonBytes = Encoding.UTF8.GetBytes(payloadJson);
            var payloadJsonBase64 = Base64UrlTextEncoder.Encode(payloadJsonBytes);

            return payloadJsonBase64;
        }

        public async Task<string> SignInAsync(string email, string password)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                throw new InvalidUserException("User or Password are invalid.");
            }

            var validPassword = await _userManager.CheckPasswordAsync(user, password);
            if (!validPassword)
            {
                throw new InvalidPasswordException("User or Password are invalid.");
            }

            var isEmailConfirmed = await _userManager.IsEmailConfirmedAsync(user);
            if (!isEmailConfirmed)
            {
                throw new EmailNotConfirmedException("The email need to be confirmed.");
            }

            var JWTAuthClaims = (await _userManager.GetRolesAsync(user)).Select(userRole =>
                new Claim(ClaimTypes.Role, userRole)
            )
            .Concat(new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            });

            var JWTSecrete = _settings.Secret;
            var JWTSecreteBytes = Encoding.UTF8.GetBytes(JWTSecrete);
            var JWTAuthSigningKey = new SymmetricSecurityKey(JWTSecreteBytes);
            var JWTSigningCredential = new SigningCredentials
            (
                JWTAuthSigningKey,
                SecurityAlgorithms.HmacSha256
            );

            var JWTExpires = DateTime.Now.AddHours(3);

            var JWTSecurityToken = new JwtSecurityToken
            (
                expires: JWTExpires,
                claims: JWTAuthClaims,
                signingCredentials: JWTSigningCredential
            );

            var token = new JwtSecurityTokenHandler()
                .WriteToken(JWTSecurityToken);

            return token;
        }

        public async Task<string> CreateResetPasswordTokenAsync(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                throw new InvalidUserException("The provided email are not registered.");
            }

            var passwordResetToken = await _userManager.GeneratePasswordResetTokenAsync(user);

            var payload = new PayloadEmail
            {
                EmailAddress = email,
                Token = passwordResetToken
            };

            var payloadJson = JsonConvert.SerializeObject(payload);
            var payloadJsonBytes = Encoding.UTF8.GetBytes(payloadJson);
            var payloadBase64 = Base64UrlTextEncoder.Encode(payloadJsonBytes);

            return payloadBase64;
        }

        public async Task ResetPasswordAsync(string password, string payload)
        {
            var jsonBytes = Base64UrlTextEncoder.Decode(payload);
            var json = Encoding.UTF8.GetString(jsonBytes);

            var payloadResetPassword = JsonConvert.DeserializeObject<PayloadEmail>(json);
            var user = await _userManager.FindByEmailAsync(payloadResetPassword.EmailAddress);
            if (user == null)
            {
                throw new InvalidUserException("Invalid Token.");
            }

            var result = await _userManager.ResetPasswordAsync(user, payloadResetPassword.Token, password);
            if (!result.Succeeded)
            {
                throw new InvalidTokenException("Error while reseting password.");
            }
        }

        public async Task ConfirmEmail(string email, string token)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                throw new InvalidUserException("Invalid Token.");
            }

            var result = await _userManager.ConfirmEmailAsync(user, token);
            if (!result.Succeeded)
            {
                throw new InvalidTokenException("Invalid Token.");
            }
        }
    }
}