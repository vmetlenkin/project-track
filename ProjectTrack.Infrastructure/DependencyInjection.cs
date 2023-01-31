using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ProjectTrack.Application.Interfaces.Authentication;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Infrastructure.Authentication;
using ProjectTrack.Infrastructure.Repositories;

namespace ProjectTrack.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services, 
        ConfigurationManager configuration)
    {
        services.AddAuth(configuration);
        
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IProjectRepository, ProjectRepository>();
        services.AddScoped<IKanbanBoardRepository, KanbanBoardRepository>();
        services.AddScoped<IKanbanColumnRepository, KanbanColumnRepository>();
        services.AddScoped<IKanbanTaskRepository, KanbanTaskRepository>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();

        services.AddDbContext<DatabaseContext>(c =>
            c.UseSqlServer(configuration.GetConnectionString("DatabaseConnection"), 
                b => b.MigrationsAssembly("ProjectTrack.API")));

        return services;
    }

    private static IServiceCollection AddAuth(
        this IServiceCollection services, 
        ConfigurationManager configuration)
    {
        var jwtSettings = new JwtSettings();
        configuration.Bind(JwtSettings.SectionName, jwtSettings);

        services.AddSingleton(Options.Create(jwtSettings));
        services.AddSingleton<IJwtTokenGenerator, JwtTokenGenerator>();

        services.AddAuthentication(defaultScheme: JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options => options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = jwtSettings.Issuer,
                ValidAudience = jwtSettings.Audience,
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(jwtSettings.Secret))
            });
        
        return services;
    }
}