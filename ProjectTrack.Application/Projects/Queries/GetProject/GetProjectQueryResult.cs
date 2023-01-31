using ProjectTrack.Domain.Models;

namespace ProjectTrack.Application.Projects.Queries.GetProject;

public record GetProjectQueryResult(
    Guid Id,
    string Name,
    Guid UserId,
    IReadOnlyList<KanbanBoard> KanbanBoards);