using ErrorOr;
using MediatR;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Entities;
using ProjectTrack.Domain.Entities.ProjectModel;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.Projects.Commands.Register;

public class CreateProjectCommandHandler : IRequestHandler<CreateProjectCommand, ErrorOr<CreateProjectResult>>
{
    private readonly IUserRepository _userRepository;
    private readonly IProjectRepository _projectRepository;
    private readonly IUnitOfWork _unitOfWork;

    public CreateProjectCommandHandler(
        IUserRepository userRepository,
        IProjectRepository projectRepository,
        IUnitOfWork unitOfWork)
    {
        _userRepository = userRepository;
        _projectRepository = projectRepository;
        _unitOfWork = unitOfWork;;
    }

    public async Task<ErrorOr<CreateProjectResult>> Handle(CreateProjectCommand request, CancellationToken cancellationToken)
    {
        if (_userRepository.Get(request.UserId) is null)
        {
            return Errors.UserNotFound;
        }

        var project = Project.Create(request.Name, request.UserId);

        _projectRepository.Add(project);

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return new CreateProjectResult(
            project.Id,
            project.Name,
            project.UserId);
    }
}