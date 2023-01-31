using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IKanbanTaskRepository
{
    KanbanTask? GetById(Guid id);
    void Add(KanbanTask task);
}