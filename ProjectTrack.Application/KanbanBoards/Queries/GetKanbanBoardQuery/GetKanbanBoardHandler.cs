using MediatR;
using ErrorOr;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.KanbanBoards.Queries.GetKanbanBoardQuery;

public class GetKanbanBoardHandler : IRequestHandler<GetKanbanBoardQuery, ErrorOr<GetKanbanBoardResult>>
{
    private readonly IKanbanBoardRepository _kanbanBoardRepository;

    public GetKanbanBoardHandler(IKanbanBoardRepository kanbanBoardRepository)
    {
        _kanbanBoardRepository = kanbanBoardRepository;
    }

    public async Task<ErrorOr<GetKanbanBoardResult>> Handle(
        GetKanbanBoardQuery request, 
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        
        var board = _kanbanBoardRepository.GetById(request.id);

        if (board is null)
        {
            return Errors.Kanban.KanbanBoardNotFound;
        }

        return new GetKanbanBoardResult(
            board.Id,
            board.Columns);
    }
}