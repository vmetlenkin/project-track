namespace ProjectTrack.API.Contracts.Authentication;

public record RegisterRequest(
    string Email,
    string FirstName,
    string LastName,
    string Password);