using ErrorOr;

namespace ProjectTrack.Domain.Errors;

public static partial class Errors {
    public static Error DuplicateEmail => Error.Conflict(
            code: "User.DuplicateEmail",
            description: "Email уже используется другим пользователем");
    public static Error UserNotFound => Error.NotFound(
            code: "User.UserNotFound",
            description: "Пользователь не найден");
}