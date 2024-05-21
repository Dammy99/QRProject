using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QrProject.Domain.Dtos;
using QrProject.Domain.Services.Interfaces;

namespace QrBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        [ProducesResponseType<string>(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> LoginAsync(RegisterLoginDto loginDto)
        {
            _logger.LogDebug("Login");
            return Ok(await _userService.LoginUserAsync(loginDto));
        }

        [HttpPost("register")]
        [ProducesResponseType<string>(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> RegisterAsync(RegisterLoginDto registerDto)
        {
            _logger.LogDebug("Registration");
            return Ok(await _userService.CreateUserAsync(registerDto));
        }

        public AuthController(ILogger<WeatherForecastController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IUserService _userService;
    }
}
