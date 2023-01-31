namespace ProjectTrack.Domain.Models;

public class KanbanColumnTaskOrder : Entity<Guid>
{
    public Guid KanbanTaskId { get; set; }
    public Guid KanbanColumnId { get; set; }
    public KanbanTask KanbanTask { get; set; }
    public KanbanColumn KanbanColumn { get; set; }
    public int Order { get; set; }

    private KanbanColumnTaskOrder()
    {
    }

    private KanbanColumnTaskOrder(Guid id, Guid kanbanTaskId, Guid kanbanColumnId, int order) : base(id)
    {
        Id = id;
        KanbanTaskId = kanbanTaskId;
        KanbanColumnId = kanbanColumnId;
        Order = order;
    }

    public static KanbanColumnTaskOrder Create(Guid kanbanTaskId, Guid kanbanColumnId, int order)
    {
        return new KanbanColumnTaskOrder(Guid.NewGuid(), kanbanTaskId, kanbanColumnId, order);
    }
}