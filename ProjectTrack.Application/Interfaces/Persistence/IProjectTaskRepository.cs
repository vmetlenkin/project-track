using ProjectTrack.Domain.ProjectTaskAggregate;
using ProjectTrack.Domain.ProjectTaskAggregate.ValueObjects;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IProjectTaskRepository
{
    ProjectTask? GetById(ProjectTaskId id);
}