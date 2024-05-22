using Microsoft.IdentityModel.Tokens;
using QrProject.Data.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using System.Text;

namespace QrProject.Domain.Helpers
{
    public static class JwtHelper
    {
        public static string GenerateJwtToken(this IConfiguration configuration, string email, string role)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            //var key = Encoding.ASCII.GetBytes(_configuration);
            var pepe = configuration.GetSection("AppSettings:Secret").Value;
            var pepe1 = configuration["Secret"];
            var key = Encoding.UTF8.GetBytes(configuration.GetSection("AppSettings:Secret").Value!);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role, role)
                }),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public static string GetEmailFromToken(string token, string secret)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
            };
            var claims = tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken validatedToken);
            return claims.FindFirst(ClaimTypes.Email).Value;
        }

        public static string GetRoleFromToken(string token, string secret)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
            };
            var claims = tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken validatedToken);
            return claims.FindFirst(ClaimTypes.Role).Value;
        }
    }
}
