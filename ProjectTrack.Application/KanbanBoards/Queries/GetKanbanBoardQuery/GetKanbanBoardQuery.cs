using ErrorOr;
using MediatR;

namespace ProjectTrack.Application.KanbanBoards.Queries.GetKanbanBoardQuery;

public record GetKanbanBoardQuery(
    Guid id) : IRequest<ErrorOr<GetKanbanBoardResult>>;