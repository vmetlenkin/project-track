using Microsoft.EntityFrameworkCore;
using ProjectTrack.Domain.UserAggregate;
using ProjectTrack.Infrastructure.EntityConfigurations;

namespace ProjectTrack.Infrastructure;

public sealed class DatabaseContext : DbContext
{
    public DbSet<User> Articles => Set<User>();

    public DatabaseContext(DbContextOptions<DatabaseContext> options) 
        : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UserEntityTypeConfiguration());
    }
}