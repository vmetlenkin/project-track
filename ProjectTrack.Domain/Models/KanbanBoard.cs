namespace ProjectTrack.Domain.Models;

public class KanbanBoard : Entity<Guid>
{
    private readonly List<KanbanColumn> _columns = new();
    
    public Guid ProjectId { get; private set; }
    
    public IReadOnlyList<KanbanColumn> Columns => _columns.AsReadOnly();

    private KanbanBoard()
    {
    }

    private KanbanBoard(Guid id, Guid projectId) : base(id)
    {
        Id = id;
        ProjectId = projectId;
    }
    
    public static KanbanBoard Create(Guid projectId)
    {
        return new(
            Guid.NewGuid(), 
            projectId);
    }

    public void AddColumn(KanbanColumn column)
    {
        _columns.Add(column);
    }
}