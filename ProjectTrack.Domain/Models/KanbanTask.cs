namespace ProjectTrack.Domain.Models;

public sealed class KanbanTask : Entity<Guid>
{
    public string Title { get; private set; }
    public string Text { get; private set; }
    public KanbanColumnTaskOrder KanbanColumnTaskOrder { get; set; }

    public KanbanTask()
    {
    }

    private KanbanTask(Guid id, string title, string text, KanbanColumnTaskOrder kanbanColumnTaskOrder) : base(id)
    {
        Id = id;
        Title = title;
        Text = text;
        KanbanColumnTaskOrder = kanbanColumnTaskOrder;
    }

    public static KanbanTask Create(string title, string text, Guid kanbanColumnId, int order)
    {
        var id = Guid.NewGuid();
        var kanbanColumnTaskOrder = KanbanColumnTaskOrder.Create(id, kanbanColumnId, order);

        return new KanbanTask(id, title, text, kanbanColumnTaskOrder);
    }

    public void UpdateTask(string title, string text)
    {
        Title = title;
        Text = text;
    }
}