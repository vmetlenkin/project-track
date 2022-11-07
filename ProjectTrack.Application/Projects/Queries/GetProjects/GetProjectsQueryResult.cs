using ProjectTrack.Domain.Entities.ProjectModel;

namespace ProjectTrack.Application.Projects.Queries.GetProjects;

public record GetProjectsQueryResult(
        IReadOnlyList<Project> Projects);