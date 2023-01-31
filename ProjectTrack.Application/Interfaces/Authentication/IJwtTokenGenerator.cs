using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Interfaces.Authentication;

public interface IJwtTokenGenerator
{
    string GenerateToken(User user);
}