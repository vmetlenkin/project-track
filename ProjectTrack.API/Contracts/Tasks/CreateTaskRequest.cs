namespace ProjectTrack.API.Contracts.Tasks;

public record CreateTaskRequest(
    Guid ColumnId,
    Guid ProjectId,
    string Title,
    string Text);