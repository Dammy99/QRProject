using QrProject.Domain.Dtos;

namespace QrProject.Domain.Services.Interfaces
{
    public interface IAuthService
    {
        Task<string> LoginUserAsync(RegisterLoginDto userLoginDto);
    }
}
