using ProjectTrack.Domain.Entities.ProjectModel;

namespace ProjectTrack.Domain.Entities.UserModel;

public sealed class User : Entity<Guid>
{
    private readonly List<Project> _projects = new();

    public string Email { get; private set; }
    public string Password { get; private set; }
    public IReadOnlyList<Project> Projects => _projects.AsReadOnly();

    private User() { }

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