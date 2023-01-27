namespace ProjectTrack.API.Contracts.Tasks;

public record CreateTaskResponse(
    Guid Id,
    Guid ColumnId,
    Guid ProjectId,
    string Title,
    string Text);