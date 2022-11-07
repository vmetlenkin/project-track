using ErrorOr;

namespace ProjectTrack.Domain.Errors;

public static partial class Errors {
    public static Error ProjectNotFound => Error.NotFound(
        code: "Project.ProjectNotFound",
        description: "Проект не найден");
}