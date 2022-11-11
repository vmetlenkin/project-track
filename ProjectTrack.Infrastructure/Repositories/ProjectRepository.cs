using Microsoft.EntityFrameworkCore;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Entities;
using ProjectTrack.Domain.Entities.ProjectModel;

namespace ProjectTrack.Infrastructure.Repositories;

public class ProjectRepository : IProjectRepository
{
    private readonly DatabaseContext _context;

    public ProjectRepository(DatabaseContext context)
    {
        _context = context;
    }

    public Project? Get(Guid id)
    {
        return _context.Projects.FirstOrDefault(p => p.Id == id);
    }

    public void Add(Project project)
    {
        _context.Projects.Add(project);
    }

    public IReadOnlyList<Project> GetAll()
    {
        return _context.Projects
            .Include(p => p.Tasks)
            .ToList();
    }

    public void Remove(Project project)
    {
        _context.Projects.Remove(project);
    }
}