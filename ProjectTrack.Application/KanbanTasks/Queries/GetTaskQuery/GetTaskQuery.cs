using ErrorOr;
using MediatR;

namespace ProjectTrack.Application.KanbanTasks.Queries.GetTaskQuery;

public record GetTaskQuery(Guid Id) : IRequest<ErrorOr<GetTaskResult>>;