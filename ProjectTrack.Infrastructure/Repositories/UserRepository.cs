using ProjectTrack.Application.Interfaces.Persistence;
using ProjectTrack.Domain.Entities;
using ProjectTrack.Domain.Entities.UserModel;

namespace ProjectTrack.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    private readonly DatabaseContext _context;

    public UserRepository(DatabaseContext context)
    {
        _context = context;
    }
    
    public User? Get(Guid id)
    {
        return _context.Users.FirstOrDefault(user => user.Id == id);
    }

    public User? GetByEmail(string email)
    {
        return _context.Users.SingleOrDefault(user => user.Email == email);
    }

    public void Add(User user)
    {
        _context.Users.Add(user);
    }
}