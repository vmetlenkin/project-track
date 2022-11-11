namespace ProjectTrack.Domain.Entities.ProjectModel;

public sealed class ProjectTask : Entity<Guid>
{
    public Guid ProjectId { get; set; }
    public string Title { get; set; }
    public string Text { get; set; }

    public ProjectTask() { }
}