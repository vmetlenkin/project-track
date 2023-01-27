using ProjectTrack.Domain.ProjectAggregate;

namespace ProjectTrack.Application.Projects.Queries.GetProjects;

public record GetProjectsQueryResult(
        IReadOnlyList<Project> Projects);