using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.UserAggregate;

namespace ProjectTrack.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    private readonly DatabaseContext _context;

    public UserRepository(DatabaseContext context)
    {
        _context = context;
    }

    public User? GetByEmail(string email)
    {
        return _context.Set<User>().SingleOrDefault(user => user.Email == email);
    }

    public void Add(User user)
    {
        _context.Set<User>().Add(user);
    }
}