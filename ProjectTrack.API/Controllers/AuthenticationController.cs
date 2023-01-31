using ErrorOr;
using MapsterMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectTrack.API.Contracts.Authentication;
using ProjectTrack.API.Controllers.Common;
using ProjectTrack.Application.Authentication;
using ProjectTrack.Application.Authentication.Commands.Register;
using ProjectTrack.Application.Authentication.Queries.GetUser;
using ProjectTrack.Application.Authentication.Queries.Login;

namespace ProjectTrack.API.Controllers;

[Route("auth")]
[AllowAnonymous]
public class AuthenticationController : ApiController
{
    private readonly IMediator _mediator;
    private readonly IMapper _mapper;

    public AuthenticationController(IMediator mediator, IMapper mapper)
    {
        _mediator = mediator;
        _mapper = mapper;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        var command = _mapper.Map<RegisterCommand>(request);
        ErrorOr<AuthenticationResult> authResult = await _mediator.Send(command);

        return authResult.Match(
                response => Ok(_mapper.Map<RegisterResponse>(response)),
                errors => Problem(errors));
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var query = _mapper.Map<LoginQuery>(request);
        ErrorOr<AuthenticationResult> authResult = await _mediator.Send(query);

        return authResult.Match(
                response => Ok(_mapper.Map<LoginResponse>(response)),
                errors => Problem(errors));
    }
    
    [HttpGet("getuser")]
    public async Task<IActionResult> GetUser(string token)
    {
        var query = new GetUserQuery(token);
        ErrorOr<AuthenticationResult> authResult = await _mediator.Send(query);

        return authResult.Match(
            authResult => Ok(authResult),
            errors => Problem(errors));
    }
}