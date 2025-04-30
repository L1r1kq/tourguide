namespace CarBookingAPI.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public int TourId { get; set; }
        public string? Content { get; set; }
        public string? Author { get; set; }
        public DateTime CreatedAt { get; set; }
        public Tour? Tour { get; set; } // Навигационное свойство может быть null
    }
}