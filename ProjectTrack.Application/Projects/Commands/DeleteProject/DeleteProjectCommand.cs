using MediatR;
using ErrorOr;

namespace ProjectTrack.Application.Projects.Commands.DeleteProject;

public record DeleteProjectCommand(
    Guid projectId) : IRequest<ErrorOr<DeleteProjectResult>>;