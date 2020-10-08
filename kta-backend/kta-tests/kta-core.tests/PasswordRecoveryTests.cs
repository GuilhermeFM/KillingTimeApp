using kta_core.Models;
using kta_core.Models.Payloads;
using kta_core.Models.Settings;
using kta_core.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
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

            var options = Options.Create(new AuthenticateServiceSettings
            {
                Secret = Guid.NewGuid().ToString()
            });

            var serviceCollection = new ServiceCollection()
                .AddTransient(provider => new AuthenticateService(options, _userManagerMock.Object));

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

        [Test]
        public void CreateResetPasswordTokenWithInvalidEmailTest()
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
                .ReturnsAsync(default(User));

            _userManagerMock
                .Setup(x => x.GeneratePasswordResetTokenAsync(It.IsAny<User>()))
                .ReturnsAsync(passwordResetTokenMock);

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();

            var exception = Assert.ThrowsAsync<Exception>
            (
                async () => await authenticateService.CreateResetPasswordTokenAsync(user.Email),
                "CreateResetPasswordTokenAsync should have thrown Exception"
            );

            Assert.That(exception.Message == "The provided email are not registered.",
                "Exception message should have been 'The provided email are not registered.'"
            );
        }

        [Test]
        public void ResetPassword()
        {
            var user = new User
            {
                Fullname = "John Doe",
                UserName = "JohnDoe@example.com",
                Email = "JohnDoe@example.com"
            };

            var newPassword = Guid.NewGuid().ToString();
            var passwordResetTokenMock = Guid.NewGuid().ToString();

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(user);

            _userManagerMock
                .Setup(x => x.GeneratePasswordResetTokenAsync(It.IsAny<User>()))
                .ReturnsAsync(passwordResetTokenMock);

            _userManagerMock
                .Setup(x => x.ResetPasswordAsync(It.IsAny<User>(), It.IsAny<string>(), It.IsAny<string>()))
                .ReturnsAsync(IdentityResult.Success);

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();

            Assert.DoesNotThrowAsync
            (
                async () =>
                {
                    var payload = await authenticateService.CreateResetPasswordTokenAsync(user.Email);
                    await authenticateService.ResetPasswordAsync(newPassword, payload);
                },
                "CreateResetPasswordTokenAsync and ResetPasswordAsync should not throw Exception"
            );

            _userManagerMock
                .Verify(x => x.GeneratePasswordResetTokenAsync(
                    It.Is<User>(y => y.Email == user.Email && y.Fullname == user.Fullname)
                ), "GeneratePasswordResetTokenAsync should have been called");

            _userManagerMock
                .Verify(x => x.ResetPasswordAsync(
                    It.Is<User>(y => y.Email == user.Email && y.Fullname == user.Fullname),
                    passwordResetTokenMock, newPassword
                ), "ResetPasswordAsync should have been called");
        }

        [Test]
        public void ResetPasswordWithInvalidToken()
        {
            var user = new User
            {
                Fullname = "John Doe",
                UserName = "JohnDoe@example.com",
                Email = "JohnDoe@example.com"
            };

            var newPassword = Guid.NewGuid().ToString();
            var passwordResetTokenMock = Guid.NewGuid().ToString();

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(user);

            _userManagerMock
                .Setup(x => x.GeneratePasswordResetTokenAsync(It.IsAny<User>()))
                .ReturnsAsync(passwordResetTokenMock);


            var authenticateService = _serviceProvider.GetService<AuthenticateService>();

            var payload = default(string);
            Assert.DoesNotThrowAsync
            (
                async () =>
                {
                    payload = await authenticateService.CreateResetPasswordTokenAsync(user.Email);
                },
                "CreateResetPasswordTokenAsync and ResetPasswordAsync should not throw Exception"
            );

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(default(User));

            _userManagerMock
                .Setup(x => x.ResetPasswordAsync(It.IsAny<User>(), It.IsAny<string>(), It.IsAny<string>()))
                .ReturnsAsync(IdentityResult.Success);

            var exception = Assert.ThrowsAsync<Exception>
            (
                async () => await authenticateService.ResetPasswordAsync(newPassword, payload),
                "ResetPasswordAsync should have throw Exception"
            );

            Assert.That(exception.Message == "Invalid Token", "Exception message should have been 'Invalid Token'");

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(user);

            _userManagerMock
                .Setup(x => x.ResetPasswordAsync(It.IsAny<User>(), It.IsAny<string>(), It.IsAny<string>()))
                .ReturnsAsync(IdentityResult.Failed());

            exception = Assert.ThrowsAsync<Exception>
            (
                async () => await authenticateService.ResetPasswordAsync(newPassword, payload),
                "ResetPasswordAsync should have throw Exception"
            );

            Assert.That(exception.Message == "Invalid Token", "Exception message should have been 'Invalid Token'");
        }
    }
}