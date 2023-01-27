using ErrorOr;
using MediatR;
using ProjectTrack.Application.Interfaces.Authentication;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Entities.User;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.Authentication.Commands.Register;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand, ErrorOr<AuthenticationResult>>
{
    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    private readonly IUserRepository _userRepository;
    private readonly IUnitOfWork _unitOfWork;

    public RegisterCommandHandler(
        IJwtTokenGenerator jwtTokenGenerator, 
        IUserRepository userRepository, 
        IUnitOfWork unitOfWork)
    {
        _jwtTokenGenerator = jwtTokenGenerator;
        _userRepository = userRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<ErrorOr<AuthenticationResult>> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        if (_userRepository.GetByEmail(request.Email) is not null)
        {
            return Errors.DuplicateEmail;
        }

        var user = User.Create(request.Email, request.FirstName, request.LastName, request.Password);

        _userRepository.Add(user);

        await _unitOfWork.SaveChangesAsync(cancellationToken);

        var token = _jwtTokenGenerator.GenerateToken(user);

        return new AuthenticationResult(
            user.Id,
            user.Email,
            user.Password,
            token);
    }
}