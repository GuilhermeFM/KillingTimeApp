using kta.email;
using kta_core.Models;
using kta_core.Models.Payloads;
using kta_core.Models.Settings;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
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

        public AuthenticateService(AuthenticateServiceSettings settings, UserManager<User> userManager)
        {
            this._settings = settings;
            this._userManager = userManager;
        }

        #endregion

        public async Task<string> SignUpAsync(string fullname, string email, string password)
        {
            var existingUser = await _userManager.FindByEmailAsync(email);
            if (existingUser != null)
            {
                throw new Exception("User already exists");
            }

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
                throw new Exception("User creating failed");
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
                throw new Exception("User or Password are invalid.");
            }

            var validPassword = await _userManager.CheckPasswordAsync(user, password);
            if (!validPassword)
            {
                throw new Exception("User or Password are invalid.");
            }

            var isEmailConfirmed = await _userManager.IsEmailConfirmedAsync(user);
            if (!isEmailConfirmed)
            {
                throw new Exception("The email need to be confirmed.");
            }

            var userRoles = await _userManager.GetRolesAsync(user);

            var JWTAuthClaims = userRoles.Select(userRole =>
                new Claim(ClaimTypes.Role, userRole)
            )
            .Concat(new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            });

            var JWTSecrete = _settings.JWTSecret;
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
                throw new Exception("The provided email are not registered.");
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
                throw new Exception("Invalid Token");
            }

            var result = await _userManager.ResetPasswordAsync(user, payloadResetPassword.Token, password);
            if (!result.Succeeded)
            {
                throw new Exception("Invalid Token");
            }
        }
    }
}