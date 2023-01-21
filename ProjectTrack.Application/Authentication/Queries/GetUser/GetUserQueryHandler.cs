using ErrorOr;
using MediatR;
using System.IdentityModel.Tokens.Jwt;
using ProjectTrack.Application.Interfaces.Authentication;
using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Entities.UserModel;
using ProjectTrack.Domain.Errors;

namespace ProjectTrack.Application.Authentication.Queries.GetUser;

public class GetUserQueryHandler : IRequestHandler<GetUserQuery, ErrorOr<AuthenticationResult>>
{
    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    private readonly IUserRepository _userRepository;

    public GetUserQueryHandler(IJwtTokenGenerator jwtTokenGenerator, IUserRepository userRepository)
    {
        _jwtTokenGenerator = jwtTokenGenerator;
        _userRepository = userRepository;
    }

    public async Task<ErrorOr<AuthenticationResult>> Handle(GetUserQuery request, CancellationToken cancellationToken)
    {
        var handler = new JwtSecurityTokenHandler();
        var jsonToken = handler.ReadToken(request.Token);
        var tokenS = jsonToken as JwtSecurityToken;
        
        var email = tokenS.Claims.First(claim => claim.Type == "email").Value;

        if (_userRepository.GetByEmail(email) is not User user)
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