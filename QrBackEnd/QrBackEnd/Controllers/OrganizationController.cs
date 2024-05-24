using FireSharp.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QrProject.Data.Entities;
using QrProject.Domain.Dtos;
using QrProject.Domain.Services.Interfaces;

namespace QrBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationController : ControllerBase
    {
        [Authorize]
        [HttpGet("list")]
        [ProducesResponseType<IReadOnlyList<StorageItem>>(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetOrganizationStorageItemsList(Guid id)
        {
            var list = await _storageService.GetAllStorageItems(id);
            return Ok(list);
        }

        [Authorize]
        [HttpPost("storageItem")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> PostStorageItem(StorageItemDto storageItemDto)
        {
            await _storageService.UpsertStorageItem(storageItemDto);
            return Ok();
        }
        
        [Authorize]
        [HttpDelete("storageItem/{orgId}/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteStorageItem(string orgId, string id)
        {
            await _storageService.DeleteStorageItem(orgId, id);
            return Ok();
        }

        [Authorize]
        [HttpGet("getOrgStorageCount")]
        [ProducesResponseType<int>(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetStorageCount(string orgId)
        {
            return Ok(await _storageService.GetStorageCount(orgId));
        }

        public OrganizationController(ILogger<OrganizationController> logger, IFirebaseClient client, IStorageService storageService)
        {
            _logger = logger;
            _client = client;
            _storageService = storageService;
        }

        private readonly ILogger<OrganizationController> _logger;
        private readonly IFirebaseClient _client;
        private readonly IStorageService _storageService;
    }
}
