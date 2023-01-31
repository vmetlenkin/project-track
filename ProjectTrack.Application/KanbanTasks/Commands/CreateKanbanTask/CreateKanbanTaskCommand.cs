using MediatR;
using ErrorOr;

namespace ProjectTrack.Application.KanbanTasks.Commands.CreateKanbanTask;

public record CreateKanbanTaskCommand(
    Guid KanbanColumnId,
    string Title,
    string Text) : IRequest<ErrorOr<CreateKanbanTaskResult>>;