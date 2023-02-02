using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.DTO;

namespace ProjectTrack.Infrastructure.Repositories;

public class KanbanBoardRepository : IKanbanBoardRepository
{
    private readonly DatabaseContext _context;

    public KanbanBoardRepository(DatabaseContext context)
    {
        _context = context;
    }

    public KanbanBoardDTO? GetById(Guid id)
    {
        return _context.KanbanBoards
            .Select(b => new KanbanBoardDTO(
                b.Id, 
                b.Columns.OrderBy(c => c.Order).Select(
                    c => new KanbanColumnDTO(
                        c.Id,
                        c.Name,
                        c.KanbanColumnTaskOrders.OrderBy(t => t.Order)
                                .Select(t => new KanbanTaskDTO(
                                    t.KanbanTask.Id, 
                                    t.KanbanTask.Title,
                                    t.KanbanTask.Text,
                                    t.Order,
                                    t.KanbanColumnId)
                        ))
                    )
                )
            )
            .ToList()
            .FirstOrDefault(p => p.Id == id);
    }
}