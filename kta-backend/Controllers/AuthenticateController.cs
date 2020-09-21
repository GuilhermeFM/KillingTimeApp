using kta.Authentication;
using kta.Model;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace kta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly IConfiguration _configuration;

        public AuthenticateController(UserManager<User> userManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this._configuration = configuration;
        }

        [HttpPost]
        [Route("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] LoginModel model)
        {
            var user = await userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return Ok
                (
                    new Response { Status = 401, Message = "User or Password are invalid." }
                );
            }

            var validPassword = await userManager.CheckPasswordAsync(user, model.Password);
            if (!validPassword)
            {
                return Ok
                (
                    new Response { Status = 401, Message = "User or Password are invalid." }
                );
            }

            var JWTAuthClaims = (await userManager.GetRolesAsync(user))
                .Select(userRole =>
                    new Claim(ClaimTypes.Role, userRole)
                )
                .Concat(new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                });

            var JWTSecrete = _configuration["JWT:Secret"];
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

            return Ok
            (
                new Response<dynamic> { Status = 200, Data = token }
            );
        }

        [HttpPost]
        [Route("SignUp")]
        public async Task<IActionResult> SignUp([FromBody] RegisterModel model)
        {
            var user = await userManager.FindByEmailAsync(model.Email);
            if (user != null)
            {
                return Ok
                (
                    new Response { Status = 403, Message = "The provided email is already in use." }
                );
            }

            user = new User
            {
                Email = model.Email,
                UserName = model.Email,
                Fullname = model.Fullname,
                SecurityStamp = Guid.NewGuid().ToString(),
            };

            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.FirstOrDefault().Description;
                return Ok
                (
                    new Response
                    {
                        Status = 403,
                        Message = string.Join("\n", errors)
                    }
                );
            }

            return Ok(new Response { Status = 200, Message = "User created successfully!" });
        }
    }
}
