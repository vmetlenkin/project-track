using ErrorOr;
using MediatR;
using ProjectTrack.Application.Authentication.Commands;

namespace ProjectTrack.Application.Authentication.Queries.Login;

public record LoginQuery(
    string Email,
    string Password) : IRequest<ErrorOr<AuthenticationResult>>;