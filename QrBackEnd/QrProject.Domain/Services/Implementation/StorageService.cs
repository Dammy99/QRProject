using FireSharp.Interfaces;
using QrProject.Data.Entities;
using QrProject.Domain.Dtos;
using QrProject.Domain.Helpers;
using QrProject.Domain.Services.Interfaces;

namespace QrProject.Domain.Services.Implementation
{
    public class StorageService(IFirebaseClient client) : IStorageService
    {
        public async Task DeleteStorageItem(StorageItemDto storageItemDto)
        {
            await client.DeleteAsync($"StorageItems/{storageItemDto.OrgId}/{storageItemDto.Id}");
        }

        public async Task<IReadOnlyList<StorageItem>> GetAllStorageItems(Guid id)
        {

            var items = await client.GetAsync("StorageItems/" + id);
            if (items.Body == "null")
            {
                return null;
            };
            var itemsList = items.ResultAs<IDictionary<string, StorageItem>>().Values.ToList();
            return itemsList;
        }

        public async Task<int> GetStorageCount(string orgId)
        {
            var items = await client.GetAsync("StorageItems/" + orgId);
            if (items.Body == "null")
            {
                return 0;
            };
            return items.ResultAs<IDictionary<string, StorageItem>>().Values.Count;
        }

        public async Task<StorageItem> GetStorageItem(int id)
        {
            throw new NotImplementedException();
        }

        public async Task UpsertStorageItem(StorageItemDto storageItemDto)
        {
            await client.SetAsync($"StorageItems/{storageItemDto.OrgId}/{storageItemDto.Id}", storageItemDto.ToEntity());
        }
    }
}
