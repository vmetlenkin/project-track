namespace ProjectTrack.Domain.Models;

public sealed class Project : Entity<Guid>
{
    private readonly List<KanbanBoard> _kanbanBoards = new();
    
    public string Name { get; private set; }
    public Guid UserId { get; private set; }
    
    public IReadOnlyList<KanbanBoard> KanbanBoards => _kanbanBoards.AsReadOnly();
    
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
    
    public void AddBoard(KanbanBoard board)
    {
        _kanbanBoards.Add(board);
    }
}