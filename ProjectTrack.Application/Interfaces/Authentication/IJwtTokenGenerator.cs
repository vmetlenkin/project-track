using ProjectTrack.Domain.Entities.User;

namespace ProjectTrack.Application.Interfaces.Authentication;

public interface IJwtTokenGenerator
{
    string GenerateToken(User user);
}