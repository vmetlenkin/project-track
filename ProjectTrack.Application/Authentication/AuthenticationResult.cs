using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Application.Authentication;

public record AuthenticationResult(
    UserId Id,
    string Email,
    string Password,
    string Token);