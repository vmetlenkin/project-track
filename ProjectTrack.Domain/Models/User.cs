namespace ProjectTrack.Domain.Models;

public sealed class User : Entity<Guid>
{
    private readonly List<Project> _projects = new();

    public string Email { get; private set; }
    public string FirstName { get; private set; }
    public string LastName { get; private set; }
    public string Password { get; private set; }
    public IReadOnlyList<Project> Projects => _projects.AsReadOnly();

    // Empty constructor for EF CORE
    private User() { }

    private User(Guid id, string email, string firstName, string lastName, string password) : base(id)
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
            Guid.NewGuid(),
            email, 
            firstName,
            lastName,
            password);
    }
}