using MediatR;
using ErrorOr;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Application.Projects.Queries.GetProjects;

public record GetProjectsQuery(
    UserId? UserId) : IRequest<ErrorOr<GetProjectsQueryResult>>;