namespace ProjectTrack.Application.Authentication;

public record AuthenticationResult(
    Guid Id,
    string Email,
    string Password,
    string Token);