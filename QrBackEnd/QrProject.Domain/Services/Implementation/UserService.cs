using BCrypt.Net;
using FirebaseAdmin.Auth.Hash;
using FireSharp.Interfaces;
using Microsoft.Extensions.Configuration;
using QrProject.Data.Entities;
using QrProject.Domain.Dtos;
using QrProject.Domain.Extentions;
using QrProject.Domain.Helpers;
using QrProject.Domain.Services.Interfaces;

namespace QrProject.Domain.Services.Implementation
{
    public class UserService : IUserService
    {
        public async Task<string> CreateUserAsync(RegisterLoginDto userRegisterDto)
        {
            var userSearch = await _client.GetAsync($"Users/{userRegisterDto.Email}");

            if (userSearch.Body != "null")
            {
                throw new Exception("User already exists");
            }

            string passwordHash = BCrypt.Net.BCrypt.HashPassword(userRegisterDto.Password);

            var user = new User
            {
                Id = Guid.NewGuid(),
                Email = userRegisterDto.Email,
                PasswordHash = passwordHash,
                OrgId = Guid.Empty,
            };

            await _client.SetAsync($"Users/{userRegisterDto.Email}", user);

            return _extensionsWrapper.GetJwtToken(user);
        }

        public async Task<string> LoginUserAsync(RegisterLoginDto userLoginDto)
        {
            return await _authService.LoginUserAsync(userLoginDto);
        }

        public async Task<OrganizationDto> CreateOrganization(string userEmail, string orgName)
        {
            var organizationSearch = await _client.GetAsync($"Organizations/{orgName}");

            if (organizationSearch.Body != "null")
            {
                throw new Exception("Organization already exists");
            }

            var organization = new Organization
            {
                Id = Guid.NewGuid(),
                Name = orgName,
            };

            await _client.SetAsync($"Organizations/{organization.Id}", organization);

            var user = (await _client.GetAsync($"Users/{userEmail}")).ResultAs<User>();
            user.OrgId = organization.Id;

            await _client.UpdateAsync($"Users/{userEmail}", user);
            return organization.ToDto();
        }

        public UserService(IConfiguration configuration, IFirebaseClient client, IAuthService authService)
        {
            _extensionsWrapper = new ExtensionsWrapper(configuration);
            _client = client;
            _authService = authService;
        }


        private readonly IFirebaseClient _client;
        private readonly IExtensionsWrapper _extensionsWrapper;
        private readonly IAuthService _authService;
    }
}
