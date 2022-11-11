using MediatR;
using ErrorOr;

namespace ProjectTrack.Application.Projects.Commands.CreateTask;

public record CreateTaskCommand(
    Guid projectId) : IRequest<ErrorOr<CreateTaskResult>>;