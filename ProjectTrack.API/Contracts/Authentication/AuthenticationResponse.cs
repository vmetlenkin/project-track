using ProjectTrack.Domain.UserAggregate;

namespace ProjectTrack.API.Contracts.Authentication;

public record AuthenticationResponse(
    Guid Id,
    string Email,
    string Password,
    string Token);