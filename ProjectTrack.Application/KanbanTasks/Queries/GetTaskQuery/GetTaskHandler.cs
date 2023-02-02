using ErrorOr;
using MediatR;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.KanbanTasks.Queries.GetTaskQuery;

public class GetTaskHandler : IRequestHandler<GetTaskQuery, ErrorOr<GetTaskResult>>
{
    private readonly IKanbanTaskRepository _kanbanTaskRepository;

    public GetTaskHandler(IKanbanTaskRepository kanbanTaskRepository)
    {
        _kanbanTaskRepository = kanbanTaskRepository;
    }

    public async Task<ErrorOr<GetTaskResult>> Handle(
        GetTaskQuery request, 
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        
        var task = _kanbanTaskRepository.GetById(request.Id);

        if (task is null)
        {
            return Errors.Kanban.KanbanTaskNotFound;
        }
        
        return new GetTaskResult(task);
    }
}