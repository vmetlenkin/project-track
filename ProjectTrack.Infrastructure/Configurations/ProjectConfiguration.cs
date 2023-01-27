using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjectTrack.Domain.ProjectAggregate;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Infrastructure.Configurations;

public class ProjectConfiguration : IEntityTypeConfiguration<Project>
{
    public void Configure(EntityTypeBuilder<Project> builder)
    {
        ConfigureProjectsTable(builder);
        ConfigureKanbanColumnsTable(builder);
    }

    private void ConfigureProjectsTable(EntityTypeBuilder<Project> builder)
    {
        builder.ToTable("Projects");
        
        builder.HasKey(p => p.Id);

        builder.Property(p => p.Id)
            .ValueGeneratedNever()
            .HasConversion(
                id => id.Value, 
                value => ProjectId.Create(value));
        builder.Property(p => p.Name);
        builder.Property(p => p.UserId)
            .HasConversion(
                id => id.Value,
                value => UserId.Create(value));
    }

    private void ConfigureKanbanColumnsTable(EntityTypeBuilder<Project> builder)
    {
        builder.OwnsMany(c => c.KanbanColumns, cb =>
        {
            cb.ToTable("KanbanColumns");
            cb.WithOwner().HasForeignKey("ProjectId");

            cb.HasKey("Id", "ProjectId");

            cb.Property(c => c.Id)
                .HasColumnName("KanbanColumnId")
                .ValueGeneratedNever()
                .HasConversion(
                    id => id.Value,
                    value => KanbanColumnId.Create(value));

            cb.Property(c => c.Name);
            cb.Ignore(c => c.TaskIds);
        });
        
        builder.Metadata.FindNavigation(nameof(Project.KanbanColumns))!
            .SetPropertyAccessMode(PropertyAccessMode.Field);
    }
}