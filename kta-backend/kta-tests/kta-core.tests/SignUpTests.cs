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

namespace kta_api.tests
{
    public class SignUpTests
    {
        #region Mocks

        private Mock<IUserStore<User>> _userStoreMock;
        private Mock<UserManager<User>> _userManagerMock;
        private Mock<AuthenticateServiceSettings> _authenticateServiceSettingsMock;

        #endregion

        private ServiceProvider _serviceProvider;

        [SetUp]
        public void Setup()
        {
            _userStoreMock = new Mock<IUserStore<User>>();
            _userManagerMock = new Mock<UserManager<User>>(_userStoreMock.Object, null, null, null, null, null, null, null, null);
            _authenticateServiceSettingsMock = new Mock<AuthenticateServiceSettings>();

            var serviceCollection = new ServiceCollection()
                .AddTransient(provider => new AuthenticateService(_authenticateServiceSettingsMock.Object, _userManagerMock.Object));

            _serviceProvider = serviceCollection.BuildServiceProvider();
        }

        [Test]
        public async Task SignUp()
        {
            var fullname = "John Doe";
            var email = "JohnDoe@example.com";
            var password = Guid.NewGuid().ToString();
            var emailConfirmationToken = string.Format("{0:X}", $"{fullname}{email}".GetHashCode());

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(default(User));

            _userManagerMock
                .Setup(x => x.CreateAsync(It.IsAny<User>(), It.IsAny<string>()))
                .ReturnsAsync(IdentityResult.Success);


            _userManagerMock
                .Setup(x => x.GenerateEmailConfirmationTokenAsync(It.IsAny<User>()))
                .ReturnsAsync(emailConfirmationToken);

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();

            Assert.DoesNotThrowAsync
            (
                async () => await authenticateService.SignUpAsync(fullname, email, password),
                "Should not throw any Exception"
            );

            var payload = await authenticateService.SignUpAsync(fullname, email, password);
            Assert.IsFalse(string.IsNullOrEmpty(payload), "Should have return a payload hash");

            var expectedPayload = new PayloadConfirmEmail { EmailAddress = email, Token = emailConfirmationToken };
            var expectedPayloadJson = JsonConvert.SerializeObject(expectedPayload);
            var expectedPayloadJsonBytes = Encoding.UTF8.GetBytes(expectedPayloadJson);
            var expectedPayloadJsonBase64 = Base64UrlTextEncoder.Encode(expectedPayloadJsonBytes);

            Assert.IsTrue(payload == expectedPayloadJsonBase64, "Payload does not match");
        }

        [Test]
        public void SignUpWithExistingUser()
        {
            var fullname = "John Doe";
            var email = "JohnDoe@example.com";
            var password = Guid.NewGuid().ToString();

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(new User());

            _userManagerMock
                .Setup(x => x.CreateAsync(It.IsAny<User>(), It.IsAny<string>()))
                .ReturnsAsync(IdentityResult.Success);

            _userManagerMock
                .Setup(x => x.GenerateEmailConfirmationTokenAsync(It.IsAny<User>()))
                .ReturnsAsync(string.Format("{0:X}", $"{fullname}{email}".GetHashCode()));

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();

            var exception = Assert.ThrowsAsync<Exception>(
                async () => await authenticateService.SignUpAsync(fullname, email, password)
            );

            Assert.That(exception.Message == "User already exists", "Should have throw Exception with message 'User already exists'");
        }
    }
}
