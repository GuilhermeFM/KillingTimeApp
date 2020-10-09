using kta_api.email;
using kta_api.Model;
using kta_core._Exceptions;
using kta_core.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text;
using System.Threading.Tasks;

namespace kta_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : Controller
    {
        #region Deps

        private AuthenticateService _authenticateService;
        private IEmail _email;

        #endregion

        #region Constructors

        public AuthenticateController(AuthenticateService authenticateService, IEmail email)
        {
            _authenticateService = authenticateService;
            _email = email;
        }

        #endregion

        [HttpPost]
        [Route("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] LoginModel model)
        {
            try
            {
                var token = await _authenticateService.SignInAsync(model.Email, model.Password);
                var response = new Response<dynamic> { Status = 200, Data = token };

                return Ok(response);
            }
            catch (Exception e) when (e is InvalidUserException || e is InvalidPasswordException || e is EmailNotConfirmedException)
            {
                return Ok(new Response { Status = 401, Message = e.Message });
            }
            catch
            {
                return Ok(new Response { Status = 500, Message = "Internal Server Error." });
            }
        }

        [HttpPost]
        [Route("SignUp")]
        public async Task<IActionResult> SignUp([FromBody] RegisterModel model)
        {
            try
            {
                var payloadJsonBase64 = await _authenticateService.SignUpAsync(model.Fullname, model.Email, model.Password);
                var emailConfirmationLink = $"{model.RemoteSuccessConfirmationPath}?payload={payloadJsonBase64}";

                await _email.SendEmailAsync(model.Email, "Email confirmation link", emailConfirmationLink);
                var response = new Response { Status = 200, Message = "A confirmation email has been sent to your address." };

                return Ok(response);
            }
            catch (UserSignUpException e)
            {
                return Ok(new Response { Status = 403, Message = e.Error.Description });
            }
            catch
            {
                return Ok(new Response { Status = 500, Message = "Internal Server Error." });
            }
        }

        [HttpPost]
        [Route("SendResetPasswordLink")]
        public async Task<IActionResult> SendResetPasswordLink([FromBody] SendResetPasswordLinkModel model)
        {
            try
            {
                var payloadBase64 = await _authenticateService.CreateResetPasswordTokenAsync(model.Email);
                var resetLink = $"{model.RemotePasswordChangePath}?payload={payloadBase64}";

                await _email.SendEmailAsync(model.Email, "Account password reset link", resetLink);
                var response = new Response { Status = 200 };

                return Ok(response);
            }
            catch (InvalidUserException e)
            {
                return Ok(new Response { Status = 403, Message = e.Message });
            }
            catch
            {
                return Ok(new Response { Status = 500, Message = "Internal Server Error." });
            }
        }

        [HttpPost]
        [Route("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] string password, string payload)
        {
            try
            {
                await _authenticateService.ResetPasswordAsync(password, payload);
                var response = new Response { Status = 200, Message = "Password reset successful" };

                return Ok(response);
            }
            catch (Exception e) when (e is InvalidUserException || e is InvalidTokenException)
            {
                return Ok(new Response { Status = 403, Message = e.Message });
            }
            catch
            {
                return Ok(new Response { Status = 500, Message = "Internal Server Error." });
            }
        }

        [HttpPost]
        [Route("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail([FromBody] string email, string payload)
        {
            try
            {
                var tokenBytes = Base64UrlTextEncoder.Decode(payload);
                var token = Encoding.UTF8.GetString(tokenBytes);
                await _authenticateService.ConfirmEmail(email, token);

                var response = new Response { Status = 200, Message = "Email confirmation success." };
                return Ok(response);
            }
            catch (Exception e) when (e is InvalidUserException || e is InvalidTokenException)
            {
                return Ok(new Response { Status = 403, Message = e.Message });
            }
            catch (Exception e)
            {
                return Ok(new Response { Status = 500, Message = "Internal Server Error." });
            }
        }
    }
}
