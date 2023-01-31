namespace ProjectTrack.API.Contracts.Tasks;

public record CreateKanbanTaskResponse(
    Guid Id,
    Guid KanbanColumnId,
    string Title,
    string Text);