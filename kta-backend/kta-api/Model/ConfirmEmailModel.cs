using System.ComponentModel.DataAnnotations;

namespace kta_api.Model
{
    public class ConfirmEmailModel
    {
        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Token is required")]
        public string Token { get; set; }
    }
}
