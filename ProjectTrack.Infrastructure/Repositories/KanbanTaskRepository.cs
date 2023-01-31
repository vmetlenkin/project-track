using Microsoft.EntityFrameworkCore;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Infrastructure.Repositories;

public class KanbanTaskRepository : IKanbanTaskRepository
{
    private readonly DatabaseContext _context;

    public KanbanTaskRepository(DatabaseContext context)
    {
        _context = context;
    }

    public KanbanTask? GetById(Guid id)
    {
        return _context.KanbanTasks
            .Include(t => t.KanbanColumnTaskOrder)
            .ThenInclude(o => o.KanbanColumn)
            .FirstOrDefault(t => t.Id == id);
    }

    public void Add(KanbanTask task)
    {
        _context.KanbanTasks
            .Add(task);
    }
}