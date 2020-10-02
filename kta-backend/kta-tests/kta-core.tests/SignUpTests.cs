using kta_core.Models;
using kta_core.Models.Settings;
using kta_core.Services;

using Microsoft.AspNetCore.Identity;

using Moq;
using NUnit.Framework;
using System;
using System.Threading.Tasks;

namespace kta_api.tests
{
    public class SignUpTests
    {
        #region Fakes

        private IUserStore<User> fakeStore;
        private UserManager<User> fakeUserManager;
        private AuthenticateServiceSettings fakeAuthenticateServiceSettings;

        #endregion

        private AuthenticateService authenticateService;

        [SetUp]
        public void Setup()
        {
            fakeStore = Mock.Of<IUserStore<User>>();
            fakeAuthenticateServiceSettings = Mock.Of<AuthenticateServiceSettings>();

            var mockUserManager = new Mock<UserManager<User>>(fakeStore, null, null, null, null, null, null, null, null);

            mockUserManager
                .Setup(x => x.CreateAsync(It.IsAny<User>(), It.IsAny<string>()))
                .ReturnsAsync(IdentityResult.Success);

            mockUserManager
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(default(User));

            mockUserManager
                .Setup(x => x.GenerateEmailConfirmationTokenAsync(It.IsAny<User>()))
                .ReturnsAsync(Guid.NewGuid().ToString());

            fakeUserManager = mockUserManager.Object;
            authenticateService = new AuthenticateService(fakeAuthenticateServiceSettings, fakeUserManager);
        }

        [Test]
        public async Task SignUp()
        {
            await authenticateService.SignUpAsync("Guilherme Frizzera Meira", "guifrizzera2005@gmail.com", "123456");
        }
    }
}
