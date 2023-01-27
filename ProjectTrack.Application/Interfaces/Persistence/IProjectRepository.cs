using ProjectTrack.Domain.ProjectAggregate;
using ProjectTrack.Domain.ProjectAggregate.ValueObjects;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IProjectRepository
{
    Project? GetById(ProjectId id);
    void Add(Project project);
    IReadOnlyList<Project> GetAll();
    IReadOnlyList<Project> GetByUserId(UserId userId);
    void Remove(Project projectId);
}