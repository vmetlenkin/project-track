using Microsoft.EntityFrameworkCore;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Infrastructure;

public sealed class DatabaseContext : DbContext
{
    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Project> Projects { get; set; } = null!;
    public DbSet<KanbanBoard> KanbanBoards { get; set; } = null!;
    public DbSet<KanbanColumn> KanbanColumns { get; set; } = null!;
    public DbSet<KanbanTask> KanbanTasks { get; set; } = null!;

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