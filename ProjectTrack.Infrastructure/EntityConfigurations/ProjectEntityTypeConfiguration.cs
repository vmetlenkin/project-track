using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjectTrack.Domain.Entities.ProjectModel;

namespace ProjectTrack.Infrastructure.EntityConfigurations;

public class ProjectEntityTypeConfiguration : IEntityTypeConfiguration<Project>
{
    public void Configure(EntityTypeBuilder<Project> builder)
    {
        builder.ToTable("Projects");
        builder.HasKey(x => x.Id);
        
        builder.Property(x => x.Name);
        builder.Property(x => x.UserId);
    }
}