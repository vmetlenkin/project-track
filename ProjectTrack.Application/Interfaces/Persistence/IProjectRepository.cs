using ProjectTrack.Domain.Entities;
using ProjectTrack.Domain.Entities.ProjectModel;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IProjectRepository
{
    Project? Get(Guid id);
    void Add(Project project);
    IReadOnlyList<Project> GetAll();
    void Remove(Project projectId);
}