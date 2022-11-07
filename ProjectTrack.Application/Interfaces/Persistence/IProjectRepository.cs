using ProjectTrack.Domain.Entities;
using ProjectTrack.Domain.Entities.ProjectModel;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IProjectRepository
{
    void Add(Project project);
    IReadOnlyList<Project> GetAll();
}