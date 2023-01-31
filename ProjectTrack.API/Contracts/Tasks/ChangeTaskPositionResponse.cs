namespace ProjectTrack.API.Contracts.Tasks;

public record ChangeTaskPositionResponse(
    Guid Id,
    Guid SourceColumnId,
    Guid DestinationColumnId,
    int DestinationPosition);