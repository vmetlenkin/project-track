using ErrorOr;

namespace ProjectTrack.Domain.Errors;

public static partial class Errors {
    public static Error ProjectNotFound => Error.NotFound(
        code: "Project.ProjectNotFound",
        description: "Проект не найден");
    
    public static Error ColumnNotFound => Error.NotFound(
        code: "Project.ColumnNotFound",
        description: "Столбец канбан доски не найден");
    public static Error TaskNotFound => Error.NotFound(
        code: "Project.TaskNotFound",
        description: "Задача не найдена");
}