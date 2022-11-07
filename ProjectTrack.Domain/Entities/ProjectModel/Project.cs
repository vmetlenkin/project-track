namespace ProjectTrack.Domain.Entities.ProjectModel;

public sealed class Project : Entity<Guid>
{
    public string Name { get; private set; }
    public Guid UserId { get; private set; }
    
    private Project() { }

    private Project(Guid id, string name, Guid userId) : base(id)
    {
        Id = id;
        Name = name;
        UserId = userId;
    }

    public static Project Create(string name, Guid userId)
    {
        return new(
            Guid.NewGuid(), 
            name,
            userId);
    }
}