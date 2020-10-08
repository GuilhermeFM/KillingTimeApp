using kta_api.Model;
using kta_core.Services;

using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace kta_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : Controller
    {
        #region Deps

        private AuthenticateService _authenticateService;

        #endregion

        #region Constructors

        public AuthenticateController(AuthenticateService authenticateService)
        {
            _authenticateService = authenticateService;
        }

        #endregion

        [HttpPost]
        [Route("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] LoginModel model)
        {
            try
            {
                var token = await _authenticateService.SignInAsync(model.Email, model.Password);
                return Ok(new Response<dynamic> { Status = 200, Data = token });
            }
            catch (Exception e)
            {
                return Ok(new Response<string> { Status = 200, Message = e.Message });
            }
        }

        //[HttpPost]
        //[Route("SignUp")]
        //public async Task<IActionResult> SignUp([FromBody] RegisterModel model)
        //{
        //    //var user = await userManager.FindByEmailAsync(model.Email);
        //    //if (user != null)
        //    //{
        //    //    return Ok
        //    //    (
        //    //        new Response { Status = 403, Message = "The provided email is already in use." }
        //    //    );
        //    //}

        //    //user = new User
        //    //{
        //    //    Email = model.Email,
        //    //    UserName = model.Email,
        //    //    Fullname = model.Fullname,
        //    //    SecurityStamp = Guid.NewGuid().ToString(),
        //    //};

        //    //var result = await userManager.CreateAsync(user, model.Password);
        //    //if (!result.Succeeded)
        //    //{
        //    //    var errors = result.Errors.FirstOrDefault().Description;
        //    //    return Ok
        //    //    (
        //    //        new Response
        //    //        {
        //    //            Status = 403,
        //    //            Message = string.Join("\n", errors)
        //    //        }
        //    //    );
        //    //}

        //    //var confirmationEmailToken = await userManager.GenerateEmailConfirmationTokenAsync(user);

        //    //var payload = new PayloadConfirmEmail { Token = confirmationEmailToken, EmailAddress = model.Email };
        //    //var payloadJson = JsonConvert.SerializeObject(payload);
        //    //var payloadJsonBytes = Encoding.UTF8.GetBytes(payloadJson);
        //    //var payloadJsonBase64 = Base64UrlTextEncoder.Encode(payloadJsonBytes);

        //    //var emailConfirmationLink = $"{model.RemoteSuccessConfirmationPath}?payload={payloadJsonBase64}";
        //    //await this.email.SendEmailAsync(user.Email, "Email confirmation link", emailConfirmationLink);

        //    return Ok(new Response { Status = 200, Message = "A confirmation email has been sent to your address." });
        //}

        ////[HttpPost]
        ////[Route("SendResetPasswordLink")]
        ////public async Task<IActionResult> SendResetPasswordLink([FromBody] SendResetPasswordLinkModel model)
        ////{
        ////    var user = await userManager.FindByEmailAsync(model.Email);

        ////    if (user == null)
        ////    {
        ////        return Ok
        ////        (
        ////            new Response { Status = 403, Message = "The provided email are not registered." }
        ////        );
        ////    }

        ////    var passwordResetToken = await userManager.GeneratePasswordResetTokenAsync(user);

        ////    var payload = new PayloadConfirmEmail { Token = passwordResetToken, EmailAddress = model.Email };
        ////    var payloadJson = JsonConvert.SerializeObject(payload);
        ////    var payloadJsonBytes = Encoding.UTF8.GetBytes(payloadJson);
        ////    var payloadBase64 = Base64UrlTextEncoder.Encode(payloadJsonBytes);

        ////    var resetLink = $"{model.RemotePasswordChangePath}?payload={payloadBase64}";
        ////    await this.email.SendEmailAsync(user.Email, "Account password reset link", resetLink);

        ////    return Ok
        ////    (
        ////        new Response { Status = 200 }
        ////    );
        ////}

        //[HttpPost]
        //[Route("ResetPassword")]
        //public async Task<IActionResult> ResetPassword([FromBody] string payload)
        //{
        //    //var payloadJsonBytes = Base64UrlTextEncoder.Decode(payload);
        //    //var payloadJson = Encoding.UTF8.GetString(payloadJsonBytes);
        //    //var  = JsonConvert.DeserializeObject<PayloadResetPassword>(payloadJson);


        //    //var user = await userManager.FindByNameAsync(model.Email);

        //    //var token = Base64UrlEncoder.Decode(model.Token);
        //    //var result = await userManager.ResetPasswordAsync(user, token, model.Password);

        //    //if (!result.Succeeded)
        //    //{
        //    //    return Ok
        //    //    (
        //    //        new Response { Status = 403, Message = result.Errors.FirstOrDefault().Description }
        //    //    );
        //    //}

        //    return Ok
        //    (
        //        new Response { Status = 200, Message = "Password reset successful" }
        //    );
        //}

        ////[HttpPost]
        ////[Route("ConfirmEmail")]
        ////public async Task<IActionResult> ConfirmEmail([FromBody] string payload)
        ////{
        ////    var payloadJsonBytes = Base64UrlTextEncoder.Decode(model.Payload);
        ////    var payloadJson = Encoding.UTF8.GetString(payloadJsonBytes);
        ////    var paylaod = JsonConvert.DeserializeObject<PayloadConfirmEmail>(payloadJson);

        ////    var user = await userManager.FindByEmailAsync(paylaod.EmailAddress);
        ////    if (user == null)
        ////    {
        ////        return Ok
        ////        (
        ////            new Response { Status = 403, Message = "User not found." }
        ////        );
        ////    }

        ////    var result = await userManager.ConfirmEmailAsync(user, paylaod.Token);
        ////    if (!result.Succeeded)
        ////    {
        ////        return Ok
        ////        (
        ////            new Response { Status = 403, Message = result.Errors.FirstOrDefault().Description }
        ////        );
        ////    }

        ////    return Ok
        ////    (
        ////        new Response { Status = 200, Message = "Email confirmation Succeeded." }
        ////    );
        ////}
    }
}
