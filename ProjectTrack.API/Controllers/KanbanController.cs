using MapsterMapper;
using MediatR;
using ErrorOr;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectTrack.API.Controllers.Common;
using ProjectTrack.Application.KanbanBoards.Queries.GetKanbanBoardQuery;

namespace ProjectTrack.API.Controllers;

[Route("kanban")]
[AllowAnonymous]
public class KanbanController : ApiController
{
    private readonly IMediator _mediator;
    private readonly IMapper _mapper;

    public KanbanController(IMediator mediator, IMapper mapper)
    {
        _mediator = mediator;
        _mapper = mapper;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetById(Guid id)
    {
        
        var query = new GetKanbanBoardQuery(id);
        ErrorOr<GetKanbanBoardResult> result = await _mediator.Send(query);

        return result.Match(
            response => Ok(response),
            errors => Problem(errors));
    }
}