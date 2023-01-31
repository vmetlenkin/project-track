using MediatR;
using ErrorOr;

namespace ProjectTrack.Application.Projects.Commands.DeleteProject;

public record DeleteProjectCommand(
    Guid ProjectId) : IRequest<ErrorOr<DeleteProjectResult>>;