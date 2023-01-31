using ProjectTrack.Domain.DTO;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.KanbanBoards.Queries.GetKanbanBoardQuery;

public record GetKanbanBoardResult(
    Guid Id,
    IEnumerable<KanbanColumnDTO> Columns);