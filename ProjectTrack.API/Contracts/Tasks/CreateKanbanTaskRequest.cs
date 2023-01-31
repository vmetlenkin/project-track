namespace ProjectTrack.API.Contracts.Tasks;

public record CreateKanbanTaskRequest(
    Guid KanbanColumnId,
    string Title,
    string Text);