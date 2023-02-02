using ErrorOr;
using MediatR;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.KanbanTasks.Commands.UpdateKanbanTask;

public class GetTaskHandler : IRequestHandler<UpdateKanbanTaskCommand, ErrorOr<UpdateKanbanTaskResult>>
{
    private readonly IKanbanTaskRepository _kanbanTaskRepository;
    private readonly IUnitOfWork _unitOfWork;

    public GetTaskHandler(IKanbanTaskRepository kanbanTaskRepository, IUnitOfWork unitOfWork)
    {
        _kanbanTaskRepository = kanbanTaskRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<ErrorOr<UpdateKanbanTaskResult>> Handle(
        UpdateKanbanTaskCommand request, 
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        
        var task = _kanbanTaskRepository.GetWithTaskOrder(request.Id);

        if (task is null)
        {
            return Errors.Kanban.KanbanTaskNotFound;
        }

        task.UpdateTask(request.Title, request.Text);
        
        await _unitOfWork.SaveChangesAsync(cancellationToken);
        
        return new UpdateKanbanTaskResult(
            task.Id,
            task.Title,
            task.Text,
            task.KanbanColumnTaskOrder.Order,
            task.KanbanColumnTaskOrder.KanbanColumnId);
    }
}