using Microsoft.EntityFrameworkCore;
using CarBookingAPI;
using CarBookingAPI.Entities;
using TourBookingAPI.DataSeeds;

var builder = WebApplication.CreateBuilder(args);

// Установка порта 5110


// Проверка подключения
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
if (string.IsNullOrEmpty(connectionString))
{
    throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
}

try
{
    using var context = new ApplicationDBContext(
        new DbContextOptionsBuilder<ApplicationDBContext>()
            .UseNpgsql(connectionString)
            .Options);
    bool connected = context.Database.CanConnect();
    Console.WriteLine($"Database connection successful: {connected}");
}
catch (Exception ex)
{
    Console.WriteLine($"Connection failed: {ex.Message}");
    Console.WriteLine($"StackTrace: {ex.StackTrace}");
}

// Регистрация сервисов
builder.Services.AddDbContext<ApplicationDBContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Настройка CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", builder =>
    {
        builder.WithOrigins("http://localhost:5173")
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

// Логирование запросов
app.Use(async (context, next) =>
{
    Console.WriteLine($"Request received: {context.Request.Method} {context.Request.Path}");
    await next.Invoke();
});

// Применяем CORS
app.UseCors("AllowReactApp");

// Инициализация данных
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDBContext>();
    context.Database.EnsureCreated();

    if (!context.Tours.Any())
    {
        context.Tours.AddRange(Seed.Tours);
        context.SaveChanges();
        Console.WriteLine("Tours seeded into the database.");
    }
    else
    {
        Console.WriteLine($"Tours already exist: {context.Tours.Count()} tours found.");
    }
}

// Настройка конвейера
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseAuthorization();
app.MapControllers();

app.Run();