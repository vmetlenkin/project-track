using MediatR;
using ErrorOr;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.ProjectAggregate;

namespace ProjectTrack.Application.Projects.Queries.GetProjects;

public class GetProjectsQueryHandler : IRequestHandler<GetProjectsQuery, ErrorOr<GetProjectsQueryResult>>
{
    private readonly IProjectRepository _projectRepository;

    public GetProjectsQueryHandler(IProjectRepository projectRepository)
    {
        _projectRepository = projectRepository;
    }

    public async Task<ErrorOr<GetProjectsQueryResult>> Handle(GetProjectsQuery request, CancellationToken cancellationToken)
    {
        IReadOnlyList<Project> projects;

        if (request.UserId == null)
        {
            projects = _projectRepository.GetAll();
        }
        else
        {
            projects = _projectRepository.GetByUserId(request.UserId);
        }

        return new GetProjectsQueryResult(projects);
    }
}