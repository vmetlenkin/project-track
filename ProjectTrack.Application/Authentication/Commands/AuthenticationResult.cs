using ProjectTrack.Domain.UserAggregate;

namespace ProjectTrack.Application.Authentication.Commands;

public record AuthenticationResult(
    Guid Id,
    string Email,
    string Password,
    string Token);