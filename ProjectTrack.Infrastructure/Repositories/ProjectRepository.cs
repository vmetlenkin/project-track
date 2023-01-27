using Microsoft.EntityFrameworkCore;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.ProjectAggregate;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Infrastructure.Repositories;

public class ProjectRepository : IProjectRepository
{
    private readonly DatabaseContext _context;

    public ProjectRepository(DatabaseContext context)
    {
        _context = context;
    }

    public Project? GetById(ProjectId id)
    {
        return _context.Projects
            .Include(p => p.KanbanColumns)
            .FirstOrDefault(p => p.Id == id);
    }

    public void Add(Project project)
    {
        _context.Projects
            .Add(project);
    }

    public IReadOnlyList<Project> GetAll()
    {
        return _context.Projects
            .Include(p => p.KanbanColumns)
            .ToList();
    }

    public IReadOnlyList<Project> GetByUserId(UserId userId)
    {
        return _context.Projects
            .Where(p => p.UserId == userId)
            .ToList();
    }

    public void Remove(Project project)
    {
        _context.Projects
            .Remove(project);
    }
}