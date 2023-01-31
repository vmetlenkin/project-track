namespace ProjectTrack.Application.KanbanTasks.Commands.CreateKanbanTask;

public record CreateKanbanTaskResult(
    Guid Id,
    Guid KanbanColumnId,
    string Title,
    string Text);