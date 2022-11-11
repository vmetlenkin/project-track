using ProjectTrack.Domain.Entities.ProjectModel;

namespace ProjectTrack.Application.Projects.Commands.CreateTask;

public record CreateTaskResult(
    ProjectTask task);