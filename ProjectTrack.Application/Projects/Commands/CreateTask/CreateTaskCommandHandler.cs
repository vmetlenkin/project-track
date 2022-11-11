using MediatR;
using ErrorOr;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Entities.ProjectModel;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.Projects.Commands.CreateTask;

public class CreateTaskCommandHandler : IRequestHandler<CreateTaskCommand, ErrorOr<CreateTaskResult>>
{
    private readonly IProjectRepository _projectRepository;
    private readonly IUnitOfWork _unitOfWork;

    public CreateTaskCommandHandler(
        IProjectRepository projectRepository, 
        IUnitOfWork unitOfWork)
    {
        _projectRepository = projectRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<ErrorOr<CreateTaskResult>> Handle(CreateTaskCommand request, CancellationToken cancellationToken)
    {
        if (_projectRepository.Get(request.projectId) is not Project project)
        {
            return Errors.ProjectNotFound;
        }
        
        var task = new ProjectTask()
        {
            ProjectId = request.projectId,
            Title = "title",
            Text = "text"
        };
        
        project.AddTask(task);

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return new CreateTaskResult(task);
    }
}