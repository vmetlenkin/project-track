using ProjectTrack.Domain.UserAggregate;

namespace ProjectTrack.Application.Interfaces.Authentication;

public interface IJwtTokenGenerator
{
    string GenerateToken(User user);
}