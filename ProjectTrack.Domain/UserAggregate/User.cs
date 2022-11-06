using ProjectTrack.Domain.Models;

namespace ProjectTrack.Domain.UserAggregate;

public sealed class User : AggregateRoot<Guid>
{
    public string Email { get; }
    public string Password { get; }
    
    private User()
    {
        // EF Core requirement
    }

    private User(Guid id, string email, string password) : base(id)
    {
        Id = id;
        Email = email;
        Password = password;
    }
    
    public static User Create(string email, string password)
    {
        return new User(
            Guid.NewGuid(), 
            email, 
            password);
    }
}