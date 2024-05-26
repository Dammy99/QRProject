using FireSharp.Config;
using FireSharp.Interfaces;
using QrBackEnd.Configuration;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace QrBackEnd
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });

                options.OperationFilter<SecurityRequirementsOperationFilter>();
            });

            builder.Services.AddAuthentication().AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                        builder.Configuration.GetSection("AppSettings:Secret").Value!)),
                    ValidAudience = "Api",
                    ValidIssuer = "https://localhost:5001"
                };
            });

            builder.Services.AddMyDependencies();

            IFirebaseConfig config = new FirebaseConfig()
            {
                AuthSecret = "vZaymUPFaRSZCgRt0kc7lrfnyEiaPwrSQHBopLxi",
                BasePath = "https://qrproject-99d37-default-rtdb.europe-west1.firebasedatabase.app/"
            };
            IFirebaseClient client;
            client = new FireSharp.FirebaseClient(config);


            builder.Services.AddSingleton<IFirebaseClient>(client);


            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    policy =>
                    {
                        policy
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors();

            //app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
