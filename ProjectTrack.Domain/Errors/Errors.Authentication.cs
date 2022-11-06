using ErrorOr;

namespace ProjectTrack.Domain.Errors;

public static partial class Errors
{
    public static class Authentication
    {
        public static Error InvalidCredentials => Error.Conflict(
                code: "Auth.InvalidCred",
                description: "Неверный email или пароль");
    }
}