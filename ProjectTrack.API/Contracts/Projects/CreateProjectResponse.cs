namespace ProjectTrack.API.Contracts.Projects;

public record CreateProjectResponse(
    Guid Id,
    string Name,
    Guid UserId);