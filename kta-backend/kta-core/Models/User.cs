using Microsoft.AspNetCore.Identity;

namespace kta_core.Models
{
    public class User : IdentityUser
    {
        public string Fullname { get; set; }
    }
}
