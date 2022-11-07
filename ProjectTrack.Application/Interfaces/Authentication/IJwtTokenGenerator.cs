using ProjectTrack.Domain.Entities;
using ProjectTrack.Domain.Entities.UserModel;

namespace ProjectTrack.Application.Interfaces.Authentication;

public interface IJwtTokenGenerator
{
    string GenerateToken(User user);
}