using MapsterMapper;
using MediatR;
using ErrorOr;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectTrack.API.Contracts.Projects;
using ProjectTrack.API.Controllers.Common;
using ProjectTrack.Application.Projects.Commands.Register;
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
    public async Task<IActionResult> GetProjects()
    {
        var query = new GetProjectsQuery();
        ErrorOr<GetProjectsQueryResult> result = await _mediator.Send(query);

        return result.Match(
            response => Ok(response),
            errors => Problem(errors));
    }
}