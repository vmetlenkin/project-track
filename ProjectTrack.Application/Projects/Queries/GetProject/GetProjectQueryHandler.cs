using ErrorOr;
using MediatR;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.Projects.Queries.GetProject;

public class GetProjectQueryHandler : IRequestHandler<GetProjectQuery, ErrorOr<GetProjectQueryResult>>
{
    private readonly IProjectRepository _projectRepository;

    public GetProjectQueryHandler(IProjectRepository projectRepository)
    {
        _projectRepository = projectRepository;
    }

    public async Task<ErrorOr<GetProjectQueryResult>> Handle(
        GetProjectQuery request, 
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        
        var project = _projectRepository.GetById(request.Id);

        if (project is null)
        {
            return Errors.ProjectNotFound;
        }

        return new GetProjectQueryResult(
            project.Id, 
            project.Name, 
            project.UserId,
            project.KanbanBoards);
    }
}