using ProjectTrack.Domain.Models;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;
using ProjectTrack.Domain.ProjectTaskAggregate.ValueObjects;

namespace ProjectTrack.Domain.ProjectAggregate.Entities;

public sealed class KanbanColumn : Entity<KanbanColumnId>
{
    private readonly List<ProjectTaskId> _taskIds = new();
    
    public ProjectId ProjectId { get; private set; }
    public string Name { get; private set; }
    
    public IReadOnlyList<ProjectTaskId> TaskIds => _taskIds.AsReadOnly();

    private KanbanColumn()
    {
    }
    
    private KanbanColumn(KanbanColumnId id, ProjectId projectId, string name)
    {
        Id = id;
        ProjectId = projectId;
        Name = name;
    }

    public static KanbanColumn Create(ProjectId projectId, string name)
    {
        return new(
            KanbanColumnId.CreateUnique(), 
            projectId, 
            name);
    }
}