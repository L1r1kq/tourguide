using Microsoft.AspNetCore.Mvc;
using CarBookingAPI.Entities;
using System.Net.Mail;
using System.Net;

namespace CarBookingAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApplicationsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public ApplicationsController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitApplication([FromBody] Application application)
        {
            if (string.IsNullOrWhiteSpace(application.FullName) || application.FullName.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length < 2)
            {
                return BadRequest(new { message = "Full name must contain at least two words" });
            }

            if (string.IsNullOrWhiteSpace(application.Country))
            {
                return BadRequest(new { message = "Country is required" });
            }

            if (string.IsNullOrWhiteSpace(application.Email) || !IsValidEmail(application.Email))
            {
                return BadRequest(new { message = "Invalid email format" });
            }

            if (string.IsNullOrWhiteSpace(application.Phone))
            {
                return BadRequest(new { message = "Phone number is required" });
            }

            application.CreatedAt = DateTime.UtcNow;
            _context.Applications.Add(application);
            await _context.SaveChangesAsync();

            try
            {
                var smtpClient = new SmtpClient("smtp.yandex.ru")
                {
                    Port = 25, // Изменено на 587 для SSL
                    Credentials = new NetworkCredential("l1r1kg@yandex.ru", "bkgrtjmkixvrsjmn"),
                    EnableSsl = true,
                };

                // Письмо клиенту
                var clientMail = new MailMessage
                {
                    From = new MailAddress("l1r1kg@yandex.ru", "Tour Booking Team"),
                    Subject = "Ваша заявка на тур принята",
                    Body = $@"
                        <h2>Уважаемый {application.FullName}!</h2>
                        <p>Благодарим вас за обращение в нашу компанию. Ваша заявка на тур успешно получена.</p>
                        <h3>Данные вашей заявки:</h3>
                        <ul>
                            <li><strong>ФИО:</strong> {application.FullName}</li>
                            <li><strong>Контактный телефон:</strong> {application.Phone}</li>
                            <li><strong>Электронная почта:</strong> {application.Email}</li>
                            <li><strong>Страна:</strong> {application.Country}</li>
                            <li><strong>Комментарий:</strong> {application.Comment ?? "Отсутствует"}</li>
                        </ul>
                        <p>Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.</p>
                        <p>С уважением,<br>Команда Tour Booking</p>",
                    IsBodyHtml = true,
                };
                clientMail.To.Add(application.Email);

                // Письмо администратору
                var adminMail = new MailMessage
                {
                    From = new MailAddress("l1r1kg@yandex.ru", "Tour Booking Team"),
                    Subject = $"Новая заявка на тур #ID{application.Id}",
                    Body = $@"
                        <h2>Новая заявка на тур</h2>
                        <h3>Данные клиента:</h3>
                        <ul>
                            <li><strong>ФИО:</strong> {application.FullName}</li>
                            <li><strong>Телефон:</strong> {application.Phone}</li>
                            <li><strong>Email:</strong> {application.Email}</li>
                            <li><strong>Страна:</strong> {application.Country}</li>
                            <li><strong>Дата подачи:</strong> {application.CreatedAt}</li>
                            <li><strong>Комментарий:</strong> {application.Comment ?? "Отсутствует"}</li>
                        </ul>",
                    IsBodyHtml = true,
                };
                adminMail.To.Add("payback202018@gmail.com");

                await smtpClient.SendMailAsync(clientMail);
                await smtpClient.SendMailAsync(adminMail);

                clientMail.Dispose();
                adminMail.Dispose();
                smtpClient.Dispose();
            }
            catch (Exception ex)
            {
                // Логируем ошибку, но не прерываем выполнение
                Console.WriteLine($"Failed to send emails: {ex.Message}");
                return Ok(new { message = "Application submitted, but failed to send emails" });
            }

            return Ok(new { message = "Application submitted successfully" });
        }

        private bool IsValidEmail(string email)
        {
            try
            {
                var addr = new MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }
    }
}