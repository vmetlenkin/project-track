namespace ProjectTrack.Application.KanbanTasks.Commands.DeleteKanbanTask;

public record DeleteKanbanTaskResult(
    Guid Id,
    string Title,
    string Text,
    int Order,
    Guid KanbanColumnId);