using ProjectTrack.Domain.Entities;
using ProjectTrack.Domain.Models;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;
using ProjectTrack.Domain.ProjectTaskAggregate.ValueObjects;

namespace ProjectTrack.Domain.ProjectTaskAggregate;

public sealed class ProjectTask : Entity<ProjectTaskId>
{
    public ProjectId ProjectId { get; private set; }
    public KanbanColumnId KanbanColumnId { get; private set; }
    public string Title { get; private set; }
    public string Text { get; private set; }

    private ProjectTask()
    {
    }

    private ProjectTask(ProjectId projectId, KanbanColumnId columnId, string title, string text)
    {
        ProjectId = projectId;
        KanbanColumnId = columnId;
        Title = title;
        Text = text;
    }

    public static ProjectTask Create(ProjectId projectId, KanbanColumnId columnId, string title, string text)
    {
        return new(
            projectId,
            columnId,
            title,
            text);
    }
}