using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IUserRepository
{
    User? Get(Guid id);
    User? GetByEmail(string email);
    void Add(User user);
}