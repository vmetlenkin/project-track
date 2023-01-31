using Microsoft.EntityFrameworkCore;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Infrastructure.Repositories;

public class KanbanColumnRepository : IKanbanColumnRepository
{
    private readonly DatabaseContext _context;

    public KanbanColumnRepository(DatabaseContext context)
    {
        _context = context;
    }
    
    public KanbanColumn? GetById(Guid id)
    {
        return _context.KanbanColumns
            .Include(c => c.KanbanColumnTaskOrders)
            .FirstOrDefault(p => p.Id == id);
    }
}