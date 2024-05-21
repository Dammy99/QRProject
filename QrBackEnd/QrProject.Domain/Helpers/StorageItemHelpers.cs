using QrProject.Data.Entities;
using QrProject.Domain.Dtos;

namespace QrProject.Domain.Helpers
{
    public static class StorageItemHelpers
    {
        public static StorageItem ToEntity(this StorageItemDto storageItemDto)
        {
            return new StorageItem
            {
                Id = storageItemDto.Id,
                OrgId = storageItemDto.OrgId,
                Quantity = storageItemDto.Quantity,
                Name = storageItemDto.Name,
                Details = storageItemDto.Details,
                PricePerOne = storageItemDto.PricePerOne,
                Image = storageItemDto.Image,
                Code = storageItemDto.Code,
                Category = storageItemDto.Category
            };
        }

        public static OrganizationDto ToDto(this Organization organization)
        {
            return new OrganizationDto
            {
                Id = organization.Id,
                Name = organization.Name,
            };
        }
    }
}