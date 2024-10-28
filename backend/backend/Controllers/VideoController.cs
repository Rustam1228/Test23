using backend.Context;
using backend.Dto;
using backend.Entites;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public VideoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult<Video>> CreateVideo([FromBody] VideoDto dto)
        {
            var video = new Video()
            {
                Title = dto.Title,
                Url = Guid.NewGuid().ToString(),
            };
            await _context.AddAsync(video);
            await _context.SaveChangesAsync();
            return Ok(video);
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideoAll()
        {
            var video = await _context.Videos.ToListAsync();
            return Ok(video);
        }

        [HttpGet]
        [Route("Get{id}")]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideo([FromRoute] long id)
        {
            if (_context.Videos.Any(x => x.Id == id))
            {
                var video = await _context.Videos.FirstOrDefaultAsync(x => x.Id == id);
                
                return Ok(video);
            }
            return NotFound("Not id");
        }

        [HttpPatch]
        [Route("Update{id}")]
        public async Task<ActionResult<Video>> UpdateVideo([FromRoute]long id, [FromBody] VideoDto dto)
        {
            if (_context.Videos.Any(x => x.Id == id))
            {
                await _context.Videos
                .Where(x => x.Id == id)
                .ExecuteUpdateAsync(x => x.SetProperty(y => y.Title, dto.Title));
                await _context.SaveChangesAsync();
                return Ok("Update");
            }
            return NotFound( "Not id");
            
        }

        [HttpDelete]
        [Route("Delete{id}")]
        public async Task<ActionResult<Video>> DeleteVideo([FromRoute] long id)
        {
            if (_context.Videos.Any(x => x.Id == id))
            {
                await _context.Videos
                .Where(x => x.Id == id).ExecuteDeleteAsync();
                
                return Ok("Delete");
            }
            return NotFound("Not id");

        }
    }
}
