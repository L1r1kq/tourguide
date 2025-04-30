using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarBookingAPI.Entities;
using Microsoft.AspNetCore.Cors;

namespace CarBookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowReactApp")] // Применяем политику CORS к контроллеру
    public class ToursController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public ToursController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<Tour>>> GetAll()
        {
            return await _context.Tours.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Tour>> GetById(int id)
        {
            var tour = await _context.Tours.FindAsync(id);
            if (tour == null)
            {
                return NotFound();
            }
            return tour;
        }

        [HttpGet("filter")]
        public async Task<ActionResult<IEnumerable<Tour>>> Filter(
            [FromQuery] string[]? theme = null,
            [FromQuery] string[]? duration = null,
            [FromQuery] string[]? destination = null)
        {
            var query = _context.Tours.AsQueryable();

            if (theme != null && theme.Length > 0)
            {
                query = query.Where(t => theme.Contains(t.Type));
            }

            if (duration != null && duration.Length > 0)
            {
                query = query.Where(t => duration.Contains(t.Duration));
            }

            if (destination != null && destination.Length > 0)
            {
                query = query.Where(t => destination.Contains(t.Destination));
            }

            return await query.ToListAsync();
        }
    }
}