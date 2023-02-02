using Microsoft.EntityFrameworkCore;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.DTO;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Infrastructure.Repositories;

public class KanbanTaskRepository : IKanbanTaskRepository
{
    private readonly DatabaseContext _context;

    public KanbanTaskRepository(DatabaseContext context)
    {
        _context = context;
    }

    public KanbanTaskDTO? GetById(Guid id)
    {
        return _context.KanbanTasks
            .Select(t => new KanbanTaskDTO (
                t.Id,
                t.Title,
                t.Text,
                t.KanbanColumnTaskOrder.Order,
                t.KanbanColumnTaskOrder.KanbanColumnId)
            )
            .ToList()
            .FirstOrDefault(t => t.Id == id);
    }

    public KanbanTask? GetWithTaskOrder(Guid id)
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

    public void Remove(KanbanTask task)
    {
        _context.KanbanTasks
            .Remove(task);
    }
}