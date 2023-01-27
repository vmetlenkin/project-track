using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjectTrack.Domain.ProjectTaskAggregate;
using ProjectTrack.Domain.ProjectTaskAggregate.ValueObjects;

namespace ProjectTrack.Infrastructure.Configurations;

public class ProjectTaskConfiguration : IEntityTypeConfiguration<ProjectTask>
{
    public void Configure(EntityTypeBuilder<ProjectTask> builder)
    {
        builder.ToTable("Tasks");
        builder.HasKey(x => x.Id);

        builder.Property(p => p.Id)
            .ValueGeneratedNever()
            .HasConversion(
                id => id.Value, 
                value => ProjectTaskId.Create(value));
        builder.Property(x => x.Title);
        builder.Property(x => x.Text);
    }
}