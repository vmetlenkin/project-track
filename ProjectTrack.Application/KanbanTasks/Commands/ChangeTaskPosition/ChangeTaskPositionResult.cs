namespace ProjectTrack.Application.KanbanTasks.Commands.ChangeTaskPosition;

public record ChangeTaskPositionResult(
    Guid Id,
    Guid SourceColumnId,
    Guid DestinationColumnId,
    int DestinationPosition);