using kta.email.Models;

using Microsoft.Extensions.Options;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace kta.email.tests
{
    [TestClass]
    public class EmailTest
    {
        [TestMethod]
        public async Task SendAsyncTest()
        {
            IOptions<EmailSettings> options = Options.Create(new EmailSettings
            {
                PrimaryDomain = "smtp.mailtrap.io",
                PrimaryPort = 587,

                From = "from@example.com",
                Username = "86035d7d20227a",
                Password = "f35dae71a23002"
            });

            var email = new Email(options);
            await email.SendEmailAsync("to@example.com", "Test Email Subject", "Test Email Message");
        }
    }
}
