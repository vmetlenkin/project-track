using MediatR;
using ErrorOr;
using ProjectTrack.Application.Interfaces.Persistence;

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
        var projects = _projectRepository.GetAll();
        
        return new GetProjectsQueryResult(projects);
    }
}