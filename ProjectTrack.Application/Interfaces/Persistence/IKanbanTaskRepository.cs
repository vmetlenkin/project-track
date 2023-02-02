using ProjectTrack.Domain.DTO;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IKanbanTaskRepository
{
    KanbanTaskDTO? GetById(Guid id);
    KanbanTask? GetWithTaskOrder(Guid id);
    void Add(KanbanTask task);
    void Remove(KanbanTask task);
}