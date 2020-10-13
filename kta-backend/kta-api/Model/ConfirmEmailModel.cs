using System.ComponentModel.DataAnnotations;

namespace kta_api.Model
{
    public class ConfirmEmailModel
    {
        [Required(ErrorMessage = "Token is required")]
        public string Token { get; set; }
    }
}
