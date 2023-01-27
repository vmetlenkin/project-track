using ProjectTrack.Domain.Models;

namespace ProjectTrack.Domain.ProjectAggregate.ValueObjects;

public sealed class KanbanColumnId : ValueObject
{
    public Guid Value { get; private set; }
    
    private KanbanColumnId(Guid value)
    {
        Value = value;
    }

    private KanbanColumnId()
    {
    }

    public static KanbanColumnId CreateUnique()
    {
        return new(Guid.NewGuid());
    }

    public static KanbanColumnId Create(Guid value)
    {
        return new KanbanColumnId(value);
    }
    
    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}