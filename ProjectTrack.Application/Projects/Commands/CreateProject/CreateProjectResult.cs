using ProjectTrack.Domain.ProjectAggregate.ValueObjects;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Application.Projects.Commands.CreateProject;

public record CreateProjectResult(
    ProjectId Id,
    string Name,
    UserId UserId);