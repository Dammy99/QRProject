using Microsoft.Extensions.Configuration;
using QrProject.Data.Entities;
using QrProject.Domain.Helpers;

namespace QrProject.Domain.Extentions
{
    public class ExtensionsWrapper : IExtensionsWrapper
    {
        private readonly IConfiguration _configuration;

        public ExtensionsWrapper(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GetJwtToken(User user)
        {
            return _configuration.GenerateJwtToken(user.Name, "User");
        }
    }
}
