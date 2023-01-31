using MediatR;
using ErrorOr;

namespace ProjectTrack.Application.Projects.Queries.GetProject;

public record GetProjectQuery(
    Guid Id) : IRequest<ErrorOr<GetProjectQueryResult>>;