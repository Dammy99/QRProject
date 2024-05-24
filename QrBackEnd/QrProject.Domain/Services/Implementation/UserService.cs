using BCrypt.Net;
using FirebaseAdmin.Auth.Hash;
using FireSharp;
using FireSharp.Interfaces;
using Microsoft.Extensions.Configuration;
using QrProject.Data.Entities;
using QrProject.Domain.Dtos;
using QrProject.Domain.Extentions;
using QrProject.Domain.Helpers;
using QrProject.Domain.Services.Interfaces;
using System.Xml.Linq;

namespace QrProject.Domain.Services.Implementation
{
    public class UserService : IUserService
    {
        public async Task<UserDto> GetUserByName(string name)
        {
            var userSearch = (await _client.GetAsync($"Users/{name}")).ResultAs<User>();

            return new UserDto()
            {
                Id = userSearch.Id,
                Name = userSearch.Name,
                OrgId = userSearch.OrgId,
            };
        }

        public async Task<string> CreateUserAsync(RegisterLoginDto userRegisterDto)
        {
            var userSearch = await _client.GetAsync($"Users/{userRegisterDto.Name}");

            if (userSearch.Body != "null")
            {
                throw new Exception("User already exists");
            }

            string passwordHash = BCrypt.Net.BCrypt.HashPassword(userRegisterDto.Password);

            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = userRegisterDto.Name,
                PasswordHash = passwordHash,
                OrgId = Guid.Empty,
            };

            await _client.SetAsync($"Users/{userRegisterDto.Name}", user);

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

        public async Task DeleteOrganization(string orgId)
        {
            await _client.GetAsync($"Users");
            var users = (await _client.GetAsync($"Users")).ResultAs<IDictionary<string, User>>();
            foreach (var item in users)
            {
                var value = item.Value;
                if (value.OrgId.ToString() == orgId)
                {
                    value.OrgId = Guid.Empty;
                    await _client.UpdateAsync($"Users/{value.Name}", value);
                }
            }

            await _client.DeleteAsync($"StorageItems/{orgId}");
            await _client.DeleteAsync($"Organizations/{orgId}");

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
