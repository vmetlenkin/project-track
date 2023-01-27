using MediatR;
using ErrorOr;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;

namespace ProjectTrack.Application.Projects.Commands.DeleteProject;

public record DeleteProjectCommand(
    ProjectId projectId) : IRequest<ErrorOr<DeleteProjectResult>>;