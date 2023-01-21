namespace ProjectTrack.API.Contracts.Authentication;

public record RegisterResponse(
    Guid Id,
    string Email,
    string Password,
    string Token);