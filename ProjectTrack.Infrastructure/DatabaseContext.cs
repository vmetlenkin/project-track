using Microsoft.EntityFrameworkCore;
using ProjectTrack.Domain.Entities.User;
using ProjectTrack.Domain.ProjectAggregate;
using ProjectTrack.Domain.ProjectTaskAggregate;

namespace ProjectTrack.Infrastructure;

public sealed class DatabaseContext : DbContext
{
    public DbSet<Project> Projects { get; set; } = null!;
    public DbSet<ProjectTask> Tasks { get; set; } = null!;
    public DbSet<User> Users { get; set; } = null!;

    public DatabaseContext(DbContextOptions<DatabaseContext> options) 
        : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(DatabaseContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }
}