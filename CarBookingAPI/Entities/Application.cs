namespace CarBookingAPI.Entities
{
    public class Application
    {
        public int Id { get; set; }
        public string? FullName { get; set; }
        public string? Country { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Comment { get; set; } // Комментарий необязательный
        public DateTime CreatedAt { get; set; }
    }
}