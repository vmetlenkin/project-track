using ErrorOr;
using MediatR;

namespace ProjectTrack.Application.KanbanTasks.Commands.UpdateKanbanTask;

public record UpdateKanbanTaskCommand(Guid Id, string Title, string Text) : IRequest<ErrorOr<UpdateKanbanTaskResult>>;