using FireSharp.Interfaces;
using QrProject.Data.Entities;
using QrProject.Domain.Dtos;
using QrProject.Domain.Extentions;
using QrProject.Domain.Services.Interfaces;

namespace QrProject.Domain.Services.Implementation
{
    public class AuthService: IAuthService
    {
        public async Task<string> LoginUserAsync(RegisterLoginDto userLoginDto)
        {
            var user = await _client.GetAsync($"Users/{userLoginDto.Email}");

            if (user.Body == "null")
            {
                throw new Exception("User not found");
            }

            var foundUser = user.ResultAs<User>();

            if (!BCrypt.Net.BCrypt.Verify(userLoginDto.Password, foundUser.PasswordHash))
            {
                throw new Exception("Invalid password");
            }

            return _extensionsWrapper.GetJwtToken(foundUser);
        }

        public AuthService(IFirebaseClient client, IExtensionsWrapper extensionsWrapper)
        {
            _client = client;
            _extensionsWrapper = extensionsWrapper;
        }

        private readonly IFirebaseClient _client;
        private readonly IExtensionsWrapper _extensionsWrapper;
    }
}
