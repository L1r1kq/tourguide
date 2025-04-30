# 1. Используем официальный образ для .NET Core
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# 2. Устанавливаем образ для сборки .NET проекта
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ./CarBookingAPI.csproj .
RUN dotnet restore "CarBookingAPI.csproj"
COPY . .
RUN dotnet build "CarBookingAPI.csproj" -c Release -o /app/build

# 3. Публикуем приложение
FROM build AS publish
RUN dotnet publish "CarBookingAPI.csproj" -c Release -o /app/publish

# 4. Копируем собранное приложение в конечный образ
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CarBookingAPI.dll"]

