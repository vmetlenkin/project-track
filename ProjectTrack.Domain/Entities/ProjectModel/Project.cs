namespace ProjectTrack.Domain.Entities.ProjectModel;

public sealed class Project : Entity<Guid>
{
    private readonly List<ProjectTask> _tasks = new();
    
    public string Name { get; private set; }
    public Guid UserId { get; private set; }
    public IReadOnlyList<ProjectTask> Tasks => _tasks.AsReadOnly();
    
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

    public void AddTask(ProjectTask task)
    {
        _tasks.Add(task);
    }
}