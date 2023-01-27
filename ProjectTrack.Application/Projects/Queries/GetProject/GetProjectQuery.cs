using MediatR;
using ErrorOr;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;

namespace ProjectTrack.Application.Projects.Queries.GetProject;

public record GetProjectQuery(
    ProjectId Id) : IRequest<ErrorOr<GetProjectQueryResult>>;