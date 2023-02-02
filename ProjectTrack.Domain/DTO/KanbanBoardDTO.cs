namespace ProjectTrack.Domain.DTO;

public record KanbanBoardDTO(
    Guid Id,
    IEnumerable<KanbanColumnDTO> Columns);
    
public record KanbanColumnDTO(
    Guid Id, 
    string Name, 
    IEnumerable<KanbanTaskDTO> Tasks);
    
public record KanbanTaskDTO(
    Guid Id, 
    string Title,
    string Text,
    int Order,
    Guid KanbanColumnId);