namespace ProjectTrack.API.Contracts.Authentication;

public record LoginResponse(
    Guid Id,
    string Email,
    string Password,
    string Token);