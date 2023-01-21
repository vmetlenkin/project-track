using MediatR;
using ErrorOr;
using MediatR;

namespace ProjectTrack.Application.Authentication.Queries.GetUser;

public record GetUserQuery(
    string Token) : IRequest<ErrorOr<AuthenticationResult>>;