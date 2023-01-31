using MediatR;
using ErrorOr;

namespace ProjectTrack.Application.Projects.Queries.GetProjects;

public record GetProjectsQuery(
    Guid UserId) : IRequest<ErrorOr<GetProjectsQueryResult>>;