using ProjectTrack.Domain.UserAggregate;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IUserRepository
{
    User? GetByEmail(string email);
    void Add(User user);
}