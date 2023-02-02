namespace ProjectTrack.API.Contracts.Tasks;

public record UpdateKanbanTaskRequest(
    string Title,
    string Text);