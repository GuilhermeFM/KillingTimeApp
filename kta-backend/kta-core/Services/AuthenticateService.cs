using kta_core.Models;
using kta_core.Models.Payloads;
using kta_core.Models.Settings;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;

using Newtonsoft.Json;

using System;
using System.Text;
using System.Threading.Tasks;

namespace kta_core.Services
{
    public class AuthenticateService
    {
        #region Deps

        private readonly AuthenticateServiceSettings settings;
        private readonly UserManager<User> userManager;

        #endregion

        #region Constructors

        public AuthenticateService(AuthenticateServiceSettings settings, UserManager<User> userManager)
        {
            this.settings = settings;
            this.userManager = userManager;
        }

        #endregion

        public async Task<string> SignUpAsync(string fullname, string email, string password)
        {
            var existingUser = await userManager.FindByEmailAsync(email);
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

            var result = await userManager.CreateAsync(user, password);
            if (!result.Succeeded)
            {
                throw new Exception("User creating failed");
            }

            var confirmationEmailToken = await userManager.GenerateEmailConfirmationTokenAsync(user);

            var payload = new PayloadConfirmEmail { Token = confirmationEmailToken, EmailAddress = user.Email };
            var payloadJson = JsonConvert.SerializeObject(payload);
            var payloadJsonBytes = Encoding.UTF8.GetBytes(payloadJson);
            var payloadJsonBase64 = Base64UrlTextEncoder.Encode(payloadJsonBytes);

            return payloadJsonBase64;
        }
    }
}