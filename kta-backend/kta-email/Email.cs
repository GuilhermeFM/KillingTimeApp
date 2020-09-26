using kta.email.Models;

using Microsoft.Extensions.Options;

using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace kta.email
{
    public class Email : IEmail
    {
        public EmailSettings _emailSettings { get; }

        public Email(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public async Task SendEmailAsync(string to, string subject, string message)
        {
            var emailMessage = new MailMessage
            {
                Subject = subject,
                Body = message,
                IsBodyHtml = true,
                Priority = MailPriority.High,

                From = new MailAddress(_emailSettings.From, "KTA-APP")
            };

            emailMessage.To.Add(new MailAddress(to));

            using (var smtp = new SmtpClient(_emailSettings.PrimaryDomain, _emailSettings.PrimaryPort))
            {
                smtp.EnableSsl = true;
                smtp.Credentials = new NetworkCredential(_emailSettings.Username, _emailSettings.Password);
                await smtp.SendMailAsync(emailMessage);
            }
        }
    }
}
