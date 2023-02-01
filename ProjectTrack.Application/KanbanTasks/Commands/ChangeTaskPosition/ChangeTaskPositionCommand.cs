using MediatR;
using ErrorOr;

namespace ProjectTrack.Application.KanbanTasks.Commands.ChangeTaskPosition;

public record 
    ChangeTaskPositionCommand(
    Guid Id,
    Guid SourceColumnId,
    Guid DestinationColumnId,
    int SourcePosition,
    int DestinationPosition) : IRequest<ErrorOr<ChangeTaskPositionResult>>;