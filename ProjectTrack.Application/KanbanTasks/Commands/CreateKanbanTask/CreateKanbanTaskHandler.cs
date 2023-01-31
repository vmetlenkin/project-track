using ErrorOr;
using MediatR;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.KanbanTasks.Commands.CreateKanbanTask;

public class CreateKanbanTaskHandler : IRequestHandler<CreateKanbanTaskCommand, ErrorOr<CreateKanbanTaskResult>>
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

    public async Task<ErrorOr<CreateKanbanTaskResult>> Handle(
        CreateKanbanTaskCommand request, 
        CancellationToken cancellationToken)
    {
        var column = _kanbanColumnRepository.GetById(request.KanbanColumnId);
        
        if (column is null)
        {
            return Errors.Kanban.KanbanColumnNotFound;
        }

        var position = column.KanbanColumnTaskOrders.Count();

        var task = KanbanTask.Create(
            request.Title, 
            request.Text,
            request.KanbanColumnId,
            position);

        _kanbanTaskRepository.Add(task);

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return new CreateKanbanTaskResult(
            task.Id,
            task.KanbanColumnTaskOrder.KanbanColumnId,
            task.Title, 
            task.Text);
    }
}