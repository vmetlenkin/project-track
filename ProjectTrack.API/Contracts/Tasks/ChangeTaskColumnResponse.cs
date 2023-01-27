namespace ProjectTrack.API.Contracts.Tasks;

public record ChangeTaskColumnResponse(
    Guid Id,
    string Title,
    string Text,
    Guid ProjectId,
    Guid KanbanColumnId);