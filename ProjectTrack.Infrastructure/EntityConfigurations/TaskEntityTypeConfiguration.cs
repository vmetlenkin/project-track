using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjectTrack.Domain.Entities.ProjectModel;

namespace ProjectTrack.Infrastructure.EntityConfigurations;

public class TaskEntityTypeConfiguration : IEntityTypeConfiguration<ProjectTask>
{
    public void Configure(EntityTypeBuilder<ProjectTask> builder)
    {
        builder.ToTable("Tasks");
        builder.HasKey(x => x.Id);

        builder.Property(x => x.ProjectId);
        builder.Property(x => x.Title);
        builder.Property(x => x.Text);
    }
}