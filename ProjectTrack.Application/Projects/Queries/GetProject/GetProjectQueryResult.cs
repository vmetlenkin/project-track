using ProjectTrack.Domain.ProjectAggregate.Entities;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Application.Projects.Queries.GetProject;

public record GetProjectQueryResult(
    ProjectId Id,
    string Name,
    UserId UserId,
    IReadOnlyList<KanbanColumn> KanbanColumns);