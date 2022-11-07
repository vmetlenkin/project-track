namespace ProjectTrack.Application.Projects.Commands.Register;

public record CreateProjectResult(
    Guid Id,
    string Name,
    Guid UserId);