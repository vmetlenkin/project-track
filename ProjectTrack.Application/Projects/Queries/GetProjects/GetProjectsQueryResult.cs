using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Projects.Queries.GetProjects;

public record GetProjectsQueryResult(
        IReadOnlyList<Project> Projects);