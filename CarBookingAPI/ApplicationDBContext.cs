using Microsoft.EntityFrameworkCore;
using CarBookingAPI.Entities;

namespace CarBookingAPI
{
    public class ApplicationDBContext : DbContext
    {
        public DbSet<Tour> Tours { get; set; } = null!;
        public DbSet<Comment> Comments { get; set; } = null!;
        public DbSet<Application> Applications { get; set; } = null!;

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            : base(options)
        {
        }
    }
}