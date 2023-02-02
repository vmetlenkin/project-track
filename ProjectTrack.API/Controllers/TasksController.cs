using MapsterMapper;
using MediatR;
using ErrorOr;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectTrack.API.Contracts.Tasks;
using ProjectTrack.API.Controllers.Common;
using ProjectTrack.Application.KanbanTasks.Commands.ChangeTaskPosition;
using ProjectTrack.Application.KanbanTasks.Commands.CreateKanbanTask;
using ProjectTrack.Application.KanbanTasks.Commands.DeleteKanbanTask;
using ProjectTrack.Application.KanbanTasks.Commands.UpdateKanbanTask;
using ProjectTrack.Application.KanbanTasks.Queries.GetTaskQuery;

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
    
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetTaskById(Guid id)
    {
        var query = new GetTaskQuery(id);
        ErrorOr<GetTaskResult> result = await _mediator.Send(query);

        return result.Match(
            response => Ok(response),
            errors => Problem(errors));
    }
    
    [HttpPost("change_position")]
    public async Task<IActionResult> ChangeTaskPosition(ChangeTaskPositionRequest request)
    {
        var command = _mapper.Map<ChangeTaskPositionCommand>(request);
        ErrorOr<ChangeTaskPositionResult> result = await _mediator.Send(command);

        return result.Match(
            response => Ok(_mapper.Map<ChangeTaskPositionResponse>(response)),
            errors => Problem(errors));
    }
    
    [HttpPatch("{id:guid}")]
    public async Task<IActionResult> UpdateKanbanTask(Guid id, UpdateKanbanTaskRequest request)
    {
        var req = new
        {
            Id = id,
            Title = request.Title,
            Text = request.Text
        };
        
        var command = _mapper.Map<UpdateKanbanTaskCommand>(req);
        ErrorOr<UpdateKanbanTaskResult> result = await _mediator.Send(command);

        return result.Match(
            response => Ok(response),
            errors => Problem(errors));
    }
    
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> DeleteKanbanTask(Guid id)
    {
        var command = new DeleteKanbanTaskCommand(id);
        ErrorOr<DeleteKanbanTaskResult> result = await _mediator.Send(command);

        return result.Match(
            response => Ok(response),
            errors => Problem(errors));
    }
}