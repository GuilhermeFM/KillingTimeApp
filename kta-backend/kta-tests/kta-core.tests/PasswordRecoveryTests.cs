using kta_core.Models;
using kta_core.Models.Payloads;
using kta_core.Models.Settings;
using kta_core.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

using Moq;
using Newtonsoft.Json;
using NUnit.Framework;
using System;
using System.Text;
using System.Threading.Tasks;

namespace kta_core.tests
{
    public class PasswordRecoveryTests
    {
        #region Mocks

        private Mock<UserManager<User>> _userManagerMock;

        #endregion

        private ServiceProvider _serviceProvider;

        [SetUp]
        public void Setup()
        {
            var _userStore = Mock.Of<IUserStore<User>>();

            _userManagerMock = new Mock<UserManager<User>>(_userStore, null, null, null, null, null, null, null, null);

            var serviceCollection = new ServiceCollection()
                .AddTransient(provider => new AuthenticateService(
                    new AuthenticateServiceSettings { JWTSecret = Guid.NewGuid().ToString() },
                    _userManagerMock.Object)
                );

            _serviceProvider = serviceCollection.BuildServiceProvider();
        }

        [Test]
        public async Task CreateResetPasswordTokenTest()
        {
            var user = new User
            {
                Fullname = "John Doe",
                UserName = "JohnDoe@example.com",
                Email = "JohnDoe@example.com"
            };

            var passwordResetTokenMock = Guid.NewGuid().ToString();

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(user);

            _userManagerMock
                .Setup(x => x.GeneratePasswordResetTokenAsync(It.IsAny<User>()))
                .ReturnsAsync(passwordResetTokenMock);

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();
            var payload = await authenticateService.CreateResetPasswordTokenAsync(user.Email);

            var expectedPayload = new PayloadEmail { EmailAddress = user.Email, Token = passwordResetTokenMock };
            var expectedPayloadJson = JsonConvert.SerializeObject(expectedPayload);
            var expectedPayloadJsonBytes = Encoding.UTF8.GetBytes(expectedPayloadJson);
            var expectedPayloadJsonBase64 = Base64UrlTextEncoder.Encode(expectedPayloadJsonBytes);

            Assert.IsTrue(payload == expectedPayloadJsonBase64, "Payload does not match");
        }
    }
}