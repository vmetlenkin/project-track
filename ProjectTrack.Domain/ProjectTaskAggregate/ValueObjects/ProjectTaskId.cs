using ProjectTrack.Domain.Models;

namespace ProjectTrack.Domain.ProjectTaskAggregate.ValueObjects;

public sealed class ProjectTaskId : ValueObject
{
    public Guid Value { get; private set; }

    private ProjectTaskId(Guid value)
    {
        Value = value;
    }

    public static ProjectTaskId CreateUnique()
    {
        return new(Guid.NewGuid());
    }

    public static ProjectTaskId Create(Guid value)
    {
        return new ProjectTaskId(value);
    }
    
    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}