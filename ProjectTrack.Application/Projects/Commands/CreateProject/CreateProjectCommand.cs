using ErrorOr;
using MediatR;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Application.Projects.Commands.CreateProject;

public record CreateProjectCommand(
    string Name,
    UserId UserId) : IRequest<ErrorOr<CreateProjectResult>>;