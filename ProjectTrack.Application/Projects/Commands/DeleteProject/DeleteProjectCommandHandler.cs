using MediatR;
using ErrorOr;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Entities.ProjectModel;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.Projects.Commands.DeleteProject;

public class DeleteProjectCommandHandler : IRequestHandler<DeleteProjectCommand, ErrorOr<DeleteProjectResult>>
{
    private readonly IProjectRepository _projectRepository;
    private readonly IUnitOfWork _unitOfWork;

    public DeleteProjectCommandHandler(
        IProjectRepository projectRepository, 
        IUnitOfWork unitOfWork)
    {
        _projectRepository = projectRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<ErrorOr<DeleteProjectResult>> Handle(DeleteProjectCommand request, CancellationToken cancellationToken)
    {
        if (_projectRepository.Get(request.projectId) is not Project project)
        {
            return Errors.ProjectNotFound;
        }
        
        _projectRepository.Remove(project);

        await _unitOfWork.SaveChangesAsync(cancellationToken);
        
        return new DeleteProjectResult();
    }
}