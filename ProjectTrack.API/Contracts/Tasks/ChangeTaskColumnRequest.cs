namespace ProjectTrack.API.Contracts.Tasks;

public record ChangeTaskColumnRequest(
    Guid TaskId,
    Guid DestinationColumn);