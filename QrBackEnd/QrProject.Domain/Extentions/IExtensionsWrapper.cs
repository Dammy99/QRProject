using QrProject.Data.Entities;

namespace QrProject.Domain.Extentions
{
    public interface IExtensionsWrapper
    {
        string GetJwtToken(User user);
    }
}
