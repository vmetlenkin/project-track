namespace ProjectTrack.Domain.Models;

public class KanbanColumn : Entity<Guid>
{
    private readonly List<KanbanTask> _tasks = new();
    public string Name { get; private set; }
    public Guid KanbanBoardId { get; private set; }
    public KanbanBoard KanbanBoard { get; private set; }
    public int Order { get; private set; }
    public IEnumerable<KanbanColumnTaskOrder> KanbanColumnTaskOrders { get; set; }

    private KanbanColumn()
    {
    }

    private KanbanColumn(Guid id, string name, Guid kanbanBoardId, int order) : base(id)
    {
        Id = id;
        Name = name;
        KanbanBoardId = kanbanBoardId;
        Order = order;
    }
    
    public static KanbanColumn Create(Guid kanbanBoardId, string name, int order)
    {
        var id = Guid.NewGuid();
        
        return new(
            id,
            name,
            kanbanBoardId,
            order);
    }
}