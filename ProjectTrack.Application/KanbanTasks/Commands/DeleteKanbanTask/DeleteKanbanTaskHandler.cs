using ErrorOr;
using MediatR;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.KanbanTasks.Commands.DeleteKanbanTask;

public class DeleteKanbanTaskHandler : IRequestHandler<DeleteKanbanTaskCommand, ErrorOr<DeleteKanbanTaskResult>>
{
    private readonly IKanbanTaskRepository _kanbanTaskRepository;
    private readonly IKanbanColumnRepository _kanbanColumnRepository;
    private readonly IUnitOfWork _unitOfWork;

    public DeleteKanbanTaskHandler(
        IKanbanTaskRepository kanbanTaskRepository, 
        IUnitOfWork unitOfWork, 
        IKanbanColumnRepository kanbanColumnRepository)
    {
        _kanbanTaskRepository = kanbanTaskRepository;
        _unitOfWork = unitOfWork;
        _kanbanColumnRepository = kanbanColumnRepository;
    }

    public async Task<ErrorOr<DeleteKanbanTaskResult>> Handle(
        DeleteKanbanTaskCommand request, 
        CancellationToken cancellationToken)
    {
        var task = _kanbanTaskRepository.GetWithTaskOrder(request.Id);

        if (task is null)
        {
            return Errors.Kanban.KanbanTaskNotFound;
        }
        
        var column = _kanbanColumnRepository.GetById(task.KanbanColumnTaskOrder.KanbanColumnId);
        
        if (column is null)
        {
            return Errors.Kanban.KanbanColumnNotFound;
        }

        _kanbanTaskRepository.Remove(task);
        
        MovePositions(task.KanbanColumnTaskOrder.Order, column.KanbanColumnTaskOrders);
        
        await _unitOfWork.SaveChangesAsync(cancellationToken);
        
        return new DeleteKanbanTaskResult(
            task.Id,
            task.Title,
            task.Text,
            task.KanbanColumnTaskOrder.Order,
            task.KanbanColumnTaskOrder.KanbanColumnId);
    }
    
    private void MovePositions(
        int position,
        IEnumerable<KanbanColumnTaskOrder> columnTaskOrder)
    {
        foreach (var taskOrder in columnTaskOrder)
        {
            if (taskOrder.Order > position)
            {
                taskOrder.Order--;
            }
        }
    }
}