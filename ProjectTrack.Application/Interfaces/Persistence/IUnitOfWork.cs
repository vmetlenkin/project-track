namespace ProjectTrack.Application.Interfaces.Persistence;

public interface IUnitOfWork
{
    Task SaveChangesAsync(CancellationToken cancellationToken);
}