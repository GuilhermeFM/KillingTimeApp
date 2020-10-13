using System.ComponentModel.DataAnnotations;

namespace kta_api.Model
{
    public class ResetPasswordModel
    {
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Token is required")]
        public string Token { get; set; }
    }
}
