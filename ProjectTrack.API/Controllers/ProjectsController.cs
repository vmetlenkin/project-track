using MapsterMapper;
using MediatR;
using ErrorOr;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectTrack.API.Contracts.Projects;
using ProjectTrack.API.Controllers.Common;
using ProjectTrack.Application.Projects.Commands.CreateProject;
using ProjectTrack.Application.Projects.Commands.CreateTask;
using ProjectTrack.Application.Projects.Commands.DeleteProject;
using ProjectTrack.Application.Projects.Queries.GetProjects;

namespace ProjectTrack.API.Controllers;

[Route("projects")]
[AllowAnonymous]
public class ProjectsController : ApiController
{
    private readonly IMediator _mediator;
    private readonly IMapper _mapper;

    public ProjectsController(IMediator mediator, IMapper mapper)
    {
        _mediator = mediator;
        _mapper = mapper;
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateProject(CreateProjectRequest request)
    {
        var command = _mapper.Map<CreateProjectCommand>(request);
        ErrorOr<CreateProjectResult> result = await _mediator.Send(command);

        return result.Match(
            response => Ok(_mapper.Map<CreateProjectResponse>(response)),
            errors => Problem(errors));
    }
    
    [HttpGet]
    public async Task<IActionResult> GetProjects(string? userId)
    {
        var query = new GetProjectsQuery();
        ErrorOr<GetProjectsQueryResult> result = await _mediator.Send(query);

        return result.Match(
            response => Ok(response),
            errors => Problem(errors));
    }
    
    [HttpGet("{projectId:guid}")]
    public async Task<IActionResult> GetProjectById()
    {
        throw new NotImplementedException();
    }
    
    [HttpDelete("{projectId:guid}")]
    public async Task<IActionResult> DeleteProject(Guid projectId)
    {
        var command = new DeleteProjectCommand(projectId);
        ErrorOr<DeleteProjectResult> result = await _mediator.Send(command);
        
        return result.Match(
            response => Ok(response),
            errors => Problem(errors));
    }
    
    [HttpPost("{projectId:guid}/tasks")]
    public async Task<IActionResult> CreateTask(Guid projectId)
    {
        var command = new CreateTaskCommand(projectId);
        ErrorOr<CreateTaskResult> result = await _mediator.Send(command);

        return result.Match(
            response => Ok(response),
            errors => Problem(errors));
    }
    
    [HttpDelete("{projectId:guid}/tasks/{taskId:guid}")]
    public async Task<IActionResult> DeleteTask(Guid projectId)
    {
        return Ok(projectId);
    }
}