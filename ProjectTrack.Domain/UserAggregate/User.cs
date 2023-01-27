using ProjectTrack.Domain.Models;
using ProjectTrack.Domain.UserAggregate.ValueObjects;

namespace ProjectTrack.Domain.Entities.User;

public sealed class User : AggregateRoot<UserId>
{
    private readonly List<ProjectAggregate.Project> _projects = new();

    public string Email { get; private set; }
    public string FirstName { get; private set; }
    public string LastName { get; private set; }
    public string Password { get; private set; }
    public IReadOnlyList<ProjectAggregate.Project> Projects => _projects.AsReadOnly();

    private User()
    {
    }

    private User(UserId id, string email, string firstName, string lastName, string password) : base(id)
    {
        Id = id;
        Email = email;
        FirstName = firstName;
        LastName = lastName;
        Password = password;
    }
    
    public static User Create(string email, string firstName, string lastName, string password)
    {
        return new User(
            UserId.CreateUnique(), 
            email, 
            firstName,
            lastName,
            password);
    }
}