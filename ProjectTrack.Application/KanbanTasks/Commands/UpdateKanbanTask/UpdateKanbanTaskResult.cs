namespace ProjectTrack.Application.KanbanTasks.Commands.UpdateKanbanTask;

public record UpdateKanbanTaskResult(
    Guid Id,
    string Title,
    string Text,
    int Order,
    Guid KanbanColumnId);