using ErrorOr;

namespace ProjectTrack.Domain.Errors;

public static partial class Errors
{
    public static class Kanban
    {
        public static Error KanbanBoardNotFound => Error.NotFound(
            code: "Kanban.BoardNotFound",
            description: "Kanban-доска с данным id не найдена");
        public static Error KanbanColumnNotFound => Error.NotFound(
            code: "Kanban.ColumnNotFound",
            description: "Kanban-колонка с данным id не найдена");
        public static Error NotFound => Error.NotFound(
            code: "Kanban.NotFound",
            description: "Неравильно введены данные");
    }
}