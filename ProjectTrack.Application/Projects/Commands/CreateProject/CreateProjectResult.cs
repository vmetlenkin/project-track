namespace ProjectTrack.Application.Projects.Commands.CreateProject;

public record CreateProjectResult(
    Guid Id,
    string Name,
    Guid UserId);