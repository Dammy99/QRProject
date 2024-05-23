using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QrProject.Domain.Dtos;
using QrProject.Domain.Services.Interfaces;

namespace QrBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("getUser"), Authorize]
        [ProducesResponseType<UserDto>(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetUser(string name)
        {
            return Ok(await _userService.GetUserByName(name));
        }

        [HttpPost("createOrg"), Authorize]
        [ProducesResponseType<OrganizationDto>(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> CreateOrganization([FromBody] CreateOrganizationDto organizationDto)
        {
            return Ok(await _userService.CreateOrganization(organizationDto.userEmail, organizationDto.orgName));
        }

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        private readonly IUserService _userService;
    }
}
