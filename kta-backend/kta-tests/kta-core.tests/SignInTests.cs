using kta_core.Models;
using kta_core.Models.Settings;
using kta_core.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace kta_core.tests
{
    public class SignInTests
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
        public async Task SignIn()
        {
            var password = Guid.NewGuid().ToString();
            var user = new User { UserName = "John Doe", Email = "JohnDoe@example.com" };

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(user);

            _userManagerMock
                .Setup(x => x.IsEmailConfirmedAsync(It.IsAny<User>()))
                .ReturnsAsync(true);

            _userManagerMock
                .Setup(x => x.CheckPasswordAsync(It.IsAny<User>(), It.IsAny<string>()))
                .ReturnsAsync(true);

            _userManagerMock
                .Setup(x => x.GetRolesAsync(It.IsAny<User>()))
                .ReturnsAsync(new List<string> { "User" });

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();
            var token = await authenticateService.SignInAsync(user.Email, password);
            Assert.IsFalse(string.IsNullOrEmpty(token), "Token should be generated");
        }

        [Test]
        public void SignInWithInvalidEmail()
        {
            var password = Guid.NewGuid().ToString();
            var user = new User { UserName = "John Doe", Email = "JohnDoe@example.com" };

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(default(User));

            _userManagerMock
                .Setup(x => x.IsEmailConfirmedAsync(It.IsAny<User>()))
                .ReturnsAsync(false);

            _userManagerMock
                .Setup(x => x.CheckPasswordAsync(It.IsAny<User>(), It.IsAny<string>()))
                .ReturnsAsync(true);

            _userManagerMock
                .Setup(x => x.GetRolesAsync(It.IsAny<User>()))
                .ReturnsAsync(new List<string> { "User" });

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();

            var exception = Assert.ThrowsAsync<Exception>
            (
                async () =>
                {
                    await authenticateService.SignInAsync(user.Email, password);
                },

                "Should have throw exception"
            );

            Assert.That(exception.Message == "User or Password are invalid.",
                "Message should be 'User or Password are invalid.'"
            );
        }

        [Test]
        public void SignInWithInvalidPassword()
        {
            var password = Guid.NewGuid().ToString();
            var user = new User { UserName = "John Doe", Email = "JohnDoe@example.com" };

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(user);

            _userManagerMock
                .Setup(x => x.IsEmailConfirmedAsync(It.IsAny<User>()))
                .ReturnsAsync(false);

            _userManagerMock
                .Setup(x => x.CheckPasswordAsync(It.IsAny<User>(), It.IsAny<string>()))
                .ReturnsAsync(false);

            _userManagerMock
                .Setup(x => x.GetRolesAsync(It.IsAny<User>()))
                .ReturnsAsync(new List<string> { "User" });

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();

            var exception = Assert.ThrowsAsync<Exception>
            (
                async () =>
                {
                    await authenticateService.SignInAsync(user.Email, password);
                },

                "Should have throw exception"
            );

            Assert.That(exception.Message == "User or Password are invalid.",
                "Message should be 'User or Password are invalid.'"
            );
        }

        [Test]
        public void SignInWithEmailNotConfirmed()
        {
            var password = Guid.NewGuid().ToString();
            var user = new User { UserName = "John Doe", Email = "JohnDoe@example.com" };

            _userManagerMock
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(user);

            _userManagerMock
                .Setup(x => x.IsEmailConfirmedAsync(It.IsAny<User>()))
                .ReturnsAsync(false);

            _userManagerMock
                .Setup(x => x.CheckPasswordAsync(It.IsAny<User>(), It.IsAny<string>()))
                .ReturnsAsync(true);

            _userManagerMock
                .Setup(x => x.GetRolesAsync(It.IsAny<User>()))
                .ReturnsAsync(new List<string> { "User" });

            var authenticateService = _serviceProvider.GetService<AuthenticateService>();

            var exception = Assert.ThrowsAsync<Exception>
            (
                async () =>
                {
                    await authenticateService.SignInAsync(user.Email, password);
                },

                "Should have throw exception"
            );

            Assert.That(exception.Message == "The email need to be confirmed.",
                "Message should be 'The email need to be confirmed.'"
            );
        }
    }
}