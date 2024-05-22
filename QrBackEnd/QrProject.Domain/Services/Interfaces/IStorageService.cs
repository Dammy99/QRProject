using QrProject.Data.Entities;
using QrProject.Domain.Dtos;

namespace QrProject.Domain.Services.Interfaces
{
    public interface IStorageService
    {
        Task<IReadOnlyList<StorageItem>> GetAllStorageItems(Guid id);
        Task<StorageItem> GetStorageItem(int id);
        Task UpsertStorageItem(StorageItemDto storageItemDto);
        Task DeleteStorageItem(StorageItemDto storageItemDto);
        Task<int> GetStorageCount(string orgId);
    }
}
