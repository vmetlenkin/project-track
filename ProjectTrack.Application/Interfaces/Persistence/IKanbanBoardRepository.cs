using ProjectTrack.Domain.DTO;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IKanbanBoardRepository
{
    KanbanBoardDTO? GetById(Guid id);
}