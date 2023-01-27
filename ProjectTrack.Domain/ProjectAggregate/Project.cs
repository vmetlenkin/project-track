using ProjectTrack.Domain.Models;
using ProjectTrack.Domain.ProjectAggregate.Entities;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Domain.ProjectAggregate;

public sealed class Project : AggregateRoot<ProjectId>
{
    private readonly List<KanbanColumn> _kanbanColumns = new();
    
    public string Name { get; private set; }
    public UserId UserId { get; private set; }
    
    public IReadOnlyList<KanbanColumn> KanbanColumns => _kanbanColumns.AsReadOnly();

    private Project(ProjectId id, string name, UserId userId) : base(id)
    {
        Id = id;
        Name = name;
        UserId = userId;
    }

    public static Project Create(string name, UserId userId)
    {
        var project = new Project(ProjectId.CreateUnique(), name, userId);

        for (var i = 0; i < 4; i++)
        {
            var kanbanColumn = KanbanColumn.Create(project.Id, name);
            project.AddColumn(kanbanColumn);
        }

        return project;
    }

    public bool HasColumn(KanbanColumnId columnId)
    {
        if (!_kanbanColumns.Exists(c => c.Id == columnId))
        {
            return false;
        }

        return true;
    }

    private void AddColumn(KanbanColumn column)
    {
        _kanbanColumns.Add(column);
    }
    
#pragma warning disable
    private Project()
    {
    }
#pragma warning restore
}