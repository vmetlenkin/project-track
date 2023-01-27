using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.ProjectTaskAggregate;
using ProjectTrack.Domain.ProjectTaskAggregate.ValueObjects;

namespace ProjectTrack.Infrastructure.Repositories;

public class ProjectTaskRepository : IProjectTaskRepository
{
    private readonly DatabaseContext _context;

    public ProjectTaskRepository(DatabaseContext context)
    {
        _context = context;
    }

    public ProjectTask? GetById(ProjectTaskId id)
    {
        return _context.Tasks
            .FirstOrDefault(t => t.Id == id);
    }
}