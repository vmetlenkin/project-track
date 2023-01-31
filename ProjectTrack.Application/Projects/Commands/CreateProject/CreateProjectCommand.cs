using ErrorOr;
using MediatR;

namespace ProjectTrack.Application.Projects.Commands.CreateProject;

public record CreateProjectCommand(
    string Name,
    Guid UserId) : IRequest<ErrorOr<CreateProjectResult>>;