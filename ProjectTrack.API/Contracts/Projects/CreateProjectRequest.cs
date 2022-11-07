namespace ProjectTrack.API.Contracts.Projects;

public record CreateProjectRequest(
    string Name,
    Guid UserId);