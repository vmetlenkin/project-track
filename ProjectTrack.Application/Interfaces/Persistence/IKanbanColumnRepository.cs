using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IKanbanColumnRepository
{
    KanbanColumn? GetById(Guid id);
}