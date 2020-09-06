using kta.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace kta.Controllers
{
    [ApiController]
    public class HomeController : Controller
    {
        [Authorize]
        [Route("/")]
        public IActionResult Index()
        {
            return Ok(new Response { Status = "Success", Message = "Welcome to home" });
        }

        [Route("AboutMe")]
        public IActionResult AboutMe()
        {
            return Ok(new Response { Status = "Success", Message = "My Infos" });
        }
    }
}
