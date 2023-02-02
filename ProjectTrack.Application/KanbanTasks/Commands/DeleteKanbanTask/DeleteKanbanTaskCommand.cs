using ErrorOr;
using MediatR;

namespace ProjectTrack.Application.KanbanTasks.Commands.DeleteKanbanTask;

public record DeleteKanbanTaskCommand(
    Guid Id) : IRequest<ErrorOr<DeleteKanbanTaskResult>>;