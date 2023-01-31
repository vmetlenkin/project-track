using ErrorOr;
using MediatR;
using System.IdentityModel.Tokens.Jwt;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.Authentication.Queries.GetUser;

public class GetUserQueryHandler : IRequestHandler<GetUserQuery, ErrorOr<AuthenticationResult>>
{
    private readonly IUserRepository _userRepository;

    public GetUserQueryHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<ErrorOr<AuthenticationResult>> Handle(
        GetUserQuery request, 
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        
        var handler = new JwtSecurityTokenHandler();
        var jsonToken = handler.ReadToken(request.Token);
        var securityToken = jsonToken as JwtSecurityToken;
        
        var email = securityToken.Claims
            .First(claim => claim.Type == "email")
            .Value;
        
        var user = _userRepository.GetByEmail(email);
        
        if (user is null)
        {
            return Errors.UserNotFound;
        }
        
        return new AuthenticationResult(
            user.Id,
            user.Email,
            user.Password, 
            request.Token);
    }
}