using MapsterMapper;
using MediatR;
using ErrorOr;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectTrack.API.Contracts.Tasks;
using ProjectTrack.API.Controllers.Common;
using ProjectTrack.Application.KanbanTasks.Commands.ChangeTaskPosition;
using ProjectTrack.Application.KanbanTasks.Commands.CreateKanbanTask;

namespace ProjectTrack.API.Controllers;

[Route("tasks")]
[AllowAnonymous]
public class TasksController : ApiController
{
    private readonly IMediator _mediator;
    private readonly IMapper _mapper;

    public TasksController(IMediator mediator, IMapper mapper)
    {
        _mediator = mediator;
        _mapper = mapper;
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateTask(CreateKanbanTaskRequest request)
    {
        var command = _mapper.Map<CreateKanbanTaskCommand>(request);
        ErrorOr<CreateKanbanTaskResult> result = await _mediator.Send(command);

        return result.Match(
            response => Ok(_mapper.Map<CreateKanbanTaskResponse>(response)),
            errors => Problem(errors));
    }
    
    [HttpPost("changePosition")]
    public async Task<IActionResult> ChangeTaskPosition(ChangeTaskPositionRequest request)
    {
        var command = _mapper.Map<ChangeTaskPositionCommand>(request);
        ErrorOr<ChangeTaskPositionResult> result = await _mediator.Send(command);

        return result.Match(
            response => Ok(_mapper.Map<ChangeTaskPositionResponse>(response)),
            errors => Problem(errors));
    }
}