namespace ProjectTrack.API.Contracts.Authentication;

public record AuthenticationRequest(
    string Email,
    string Password);