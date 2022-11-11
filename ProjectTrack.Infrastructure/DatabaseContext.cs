using Microsoft.EntityFrameworkCore;
using ProjectTrack.Domain.Entities.ProjectModel;
using ProjectTrack.Domain.Entities.UserModel;
using ProjectTrack.Infrastructure.EntityConfigurations;

namespace ProjectTrack.Infrastructure;

public sealed class DatabaseContext : DbContext
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<ProjectTask> Tasks => Set<ProjectTask>();

    public DatabaseContext(DbContextOptions<DatabaseContext> options) 
        : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UserEntityTypeConfiguration());
        modelBuilder.ApplyConfiguration(new ProjectEntityTypeConfiguration());
        modelBuilder.ApplyConfiguration(new TaskEntityTypeConfiguration());
    }
}