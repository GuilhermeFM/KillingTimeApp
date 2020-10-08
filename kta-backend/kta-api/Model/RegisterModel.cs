using System.ComponentModel.DataAnnotations;

namespace kta_api.Model
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "Fullname is required")]
        public string Fullname { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        public string RemoteSuccessConfirmationPath { get; set; }
    }
}
