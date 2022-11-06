using ErrorOr;
using MediatR;

namespace ProjectTrack.Application.Authentication.Commands.Register;

public record RegisterCommand(
    string Email,
    string Password) : IRequest<ErrorOr<AuthenticationResult>>;