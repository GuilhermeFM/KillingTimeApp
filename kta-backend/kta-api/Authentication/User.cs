using Microsoft.AspNetCore.Identity;

namespace kta.Authentication
{
    public class User : IdentityUser
    {
        public string Fullname { get; set; }
    }
}
