using ProjectTrack.Domain.Entities.User;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IUserRepository
{
    User? Get(UserId id);
    User? GetByEmail(string email);
    void Add(User user);
}