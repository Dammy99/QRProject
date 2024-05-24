using QrProject.Data.Entities;
using QrProject.Domain.Dtos;

namespace QrProject.Domain.Services.Interfaces
{
    public interface IUserService
    {
        Task<string> CreateUserAsync(RegisterLoginDto userRegisterDto);
        Task<string> LoginUserAsync(RegisterLoginDto userLoginDto);
        Task AddUserToOrganization(AddUserDto userDto);
        Task DeleteOrganization(string orgId);
        Task<OrganizationDto> CreateOrganization(string userEmail, string orgName);
        Task<UserDto> GetUserByName(string name);
    }
}
