using Microsoft.EntityFrameworkCore;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Infrastructure.Repositories;

public class ProjectRepository : IProjectRepository
{
    private readonly DatabaseContext _context;

    public ProjectRepository(DatabaseContext context)
    {
        _context = context;
    }

    public Project? GetById(Guid id)
    {
        return _context.Projects
            .Include(p => p.KanbanBoards)
            .ThenInclude(b => b.Columns)
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
            .ToList();
    }

    public IReadOnlyList<Project> GetByUserId(Guid userId)
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