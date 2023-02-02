using ErrorOr;
using MediatR;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;
using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Projects.Commands.CreateProject;

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

    public async Task<ErrorOr<CreateProjectResult>> Handle(
        CreateProjectCommand request, 
        CancellationToken cancellationToken)
    {
        if (_userRepository.Get(request.UserId) is null)
        {
            return Errors.UserNotFound;
        }

        var project = Project.Create(request.Name, request.UserId);
        var board = KanbanBoard.Create(project.Id);
        
        var column1 = KanbanColumn.Create(board.Id, "Не назначены", 0);
        board.AddColumn(column1);
        
        var column2 = KanbanColumn.Create(board.Id, "Выполняются", 1);
        board.AddColumn(column2);
        
        var column3 = KanbanColumn.Create(board.Id, "Тестируются", 2);
        board.AddColumn(column3);
        var column4 = KanbanColumn.Create(board.Id, "Завершены", 3);
        board.AddColumn(column4);
        
        project.AddBoard(board);

        _projectRepository.Add(project);

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return new CreateProjectResult(
            project.Id,
            project.Name,
            project.UserId);
    }
}