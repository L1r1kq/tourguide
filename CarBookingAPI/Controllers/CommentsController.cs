using Microsoft.AspNetCore.Mvc;
using CarBookingAPI.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarBookingAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public CommentsController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet("{tourId}")]
        public async Task<ActionResult<List<Comment>>> GetAll(int tourId)
        {
            var comments = await _context.Comments
                .Where(c => c.TourId == tourId)
                .ToListAsync();

            if (comments == null || !comments.Any())
            {
                return NotFound(new { message = $"No comments found for Tour ID {tourId}" });
            }

            return Ok(comments);
        }

        [HttpPost]
        public async Task<ActionResult<Comment>> AddComment([FromBody] Comment comment)
        {
            if (string.IsNullOrWhiteSpace(comment.Content) || string.IsNullOrWhiteSpace(comment.Author))
            {
                return BadRequest(new { message = "Content and Author are required" });
            }

            comment.CreatedAt = DateTime.UtcNow;
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAll), new { tourId = comment.TourId }, comment);
        }
    }
}