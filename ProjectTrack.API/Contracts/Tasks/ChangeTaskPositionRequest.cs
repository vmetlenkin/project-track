namespace ProjectTrack.API.Contracts.Tasks;

public record ChangeTaskPositionRequest(
    Guid Id,
    Guid SourceColumnId,
    Guid DestinationColumnId,
    int DestinationPosition);