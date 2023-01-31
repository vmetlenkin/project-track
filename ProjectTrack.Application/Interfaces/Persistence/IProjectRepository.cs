

using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IProjectRepository
{
    Project? GetById(Guid id);
    void Add(Project project);
    IReadOnlyList<Project> GetAll();
    IReadOnlyList<Project> GetByUserId(Guid userId);
    void Remove(Project projectId);
}