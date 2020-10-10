using System.Threading.Tasks;

namespace kta_api.email
{
    public interface IEmail
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
