using MediatR;
using ErrorOr;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.KanbanTasks.Commands.ChangeTaskPosition;

public class CreateKanbanTaskHandler : IRequestHandler<ChangeTaskPositionCommand, ErrorOr<ChangeTaskPositionResult>>
{
    private readonly IKanbanColumnRepository _kanbanColumnRepository;
    private readonly IKanbanTaskRepository _kanbanTaskRepository;
    private readonly IUnitOfWork _unitOfWork;

    public CreateKanbanTaskHandler(
        IKanbanColumnRepository kanbanColumnRepository, 
        IKanbanTaskRepository kanbanTaskRepository, 
        IUnitOfWork unitOfWork)
    {
        _kanbanColumnRepository = kanbanColumnRepository;
        _kanbanTaskRepository = kanbanTaskRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<ErrorOr<ChangeTaskPositionResult>> Handle(
        ChangeTaskPositionCommand request, 
        CancellationToken cancellationToken)
    {
        var task = _kanbanTaskRepository.GetById(request.Id);
        var sourceColumn = _kanbanColumnRepository.GetById(request.SourceColumnId);
        var destinationColumn = _kanbanColumnRepository.GetById(request.DestinationColumnId);

        if (task is null || sourceColumn is null || destinationColumn is null)
        {
            return Errors.Kanban.NotFound;
        }

        ChangeTaskPosition(
            sourceColumn.KanbanColumnTaskOrders, 
            destinationColumn.KanbanColumnTaskOrders,
            request.SourcePosition,
            request.DestinationPosition);

        task.KanbanColumnTaskOrder.Order = request.DestinationPosition;
        task.KanbanColumnTaskOrder.KanbanColumnId = destinationColumn.Id;

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return new ChangeTaskPositionResult(
            task.Id,
            sourceColumn.Id,
            destinationColumn.Id,
            request.DestinationPosition);
    }

    private void ChangeTaskPosition(
        IEnumerable<KanbanColumnTaskOrder> sourceColumnTaskOrder, 
        IEnumerable<KanbanColumnTaskOrder> targetColumnTaskOrder,
        int sourcePosition,
        int targetPosition)
    {
        foreach (var taskOrder in sourceColumnTaskOrder)
        {
            if (taskOrder.Order > sourcePosition)
            {
                taskOrder.Order--;
            }
        }
        
        foreach (var taskOrder in targetColumnTaskOrder)
        {
            if (taskOrder.Order >= targetPosition)
            {
                taskOrder.Order++;
            }
        }
    }
}