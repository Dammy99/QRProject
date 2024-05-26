using QrProject.Domain.Extentions;
using QrProject.Domain.Services.Implementation;
using QrProject.Domain.Services.Interfaces;

namespace QrBackEnd.Configuration
{
    public static class Configuration
    {
        public static IServiceCollection AddMyDependencies(this IServiceCollection services)
        {
            services.AddScoped<IStorageService, StorageService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IExtensionsWrapper, ExtensionsWrapper>();

            return services;
        }
    }
}
