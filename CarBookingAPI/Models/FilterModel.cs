using CarBookingAPI.Enums;

namespace TourBookingAPI.Models
{
    public class FilterModel
    {
        public List<string> Theme { get; set; } = new List<string>();
        public List<string> Duration { get; set; } = new List<string>();
        public List<string> Destination { get; set; } = new List<string>();
    }
}
