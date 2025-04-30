using CarBookingAPI.Entities;

namespace TourBookingAPI.DataSeeds
{
    public static class Seed
    {
        public static List<Tour> Tours = new List<Tour>()
        {
            // Существующие туры
            // Туры в Мексику
            new Tour()
            {
                Id = 2,
                Image = "../images/mexico1.jpg",
                Type = "Cultural",
                Title = "Mayan Ruins Discovery",
                Duration = "Half day",
                Cost = "$55.00",
                Reviews = 110,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 3,
                Image = "../images/mexico2.jpg",
                Type = "Adventure",
                Title = "Cenote Diving Experience",
                Duration = "Full day",
                Cost = "$80.00",
                Reviews = 140,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 4,
                Image = "../images/mexico3.jpg",
                Type = "Historical",
                Title = "Teotihuacan Pyramids Tour",
                Duration = "Half day",
                Cost = "$60.00",
                Reviews = 130,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 5,
                Image = "../images/mexico4.jpg",
                Type = "Food & Drink",
                Title = "Authentic Taco Tour",
                Duration = "Evening",
                Cost = "$40.00",
                Reviews = 200,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 6,
                Image = "../images/mexico5.png",
                Type = "Cultural",
                Title = "Frida Kahlo Museum Visit",
                Duration = "2 hours",
                Cost = "$35.00",
                Reviews = 180,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 7,
                Image = "../images/mexico6.png",
                Type = "Adventure",
                Title = "Chichen Itza & Valladolid",
                Duration = "Full day",
                Cost = "$95.00",
                Reviews = 250,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 8,
                Image = "../images/mexico7.png",
                Type = "Nature",
                Title = "Swimming with Whale Sharks",
                Duration = "Full day",
                Cost = "$120.00",
                Reviews = 300,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 9,
                Image = "../images/mexico8.png",
                Type = "Cultural",
                Title = "Day of the Dead Experience",
                Duration = "Evening",
                Cost = "$70.00",
                Reviews = 190,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 10,
                Image = "../images/mexico9.png",
                Type = "Adventure",
                Title = "ATV & Zipline Jungle Tour",
                Duration = "Half day",
                Cost = "$85.00",
                Reviews = 220,
                Destination = "Mexico"
            },
            new Tour()
            {
                Id = 11,
                Image = "../images/mexico10.png",
                Type = "Water Activities",
                Title = "Cozumel Snorkeling Adventure",
                Duration = "Half day",
                Cost = "$75.00",
                Reviews = 170,
                Destination = "Mexico"
            },
            // Туры в Гаити
            new Tour()
            {
                Id = 12,
                Image = "../images/haiti1.png",
                Type = "Historical",
                Title = "Citadelle Laferrière Tour",
                Duration = "Full day",
                Cost = "$90.00",
                Reviews = 160,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 13,
                Image = "../images/haiti2.png",
                Type = "Nature",
                Title = "Bassin Bleu Waterfall Adventure",
                Duration = "Half day",
                Cost = "$50.00",
                Reviews = 140,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 14,
                Image = "../images/haiti3.png",
                Type = "Cultural",
                Title = "Port-au-Prince City Tour",
                Duration = "Half day",
                Cost = "$40.00",
                Reviews = 180,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 15,
                Image = "../images/haiti4.png",
                Type = "Adventure",
                Title = "Jacmel Beach & Art Tour",
                Duration = "Full day",
                Cost = "$70.00",
                Reviews = 130,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 16,
                Image = "../images/haiti5.png",
                Type = "Water Activities",
                Title = "Scuba Diving in Labadee",
                Duration = "Full day",
                Cost = "$110.00",
                Reviews = 200,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 17,
                Image = "../images/haiti6.png",
                Type = "Cultural",
                Title = "Voodoo & Spiritual Experience",
                Duration = "Evening",
                Cost = "$60.00",
                Reviews = 90,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 18,
                Image = "../images/haiti7.png",
                Type = "Historical",
                Title = "Ramiers Fortress Exploration",
                Duration = "Half day",
                Cost = "$75.00",
                Reviews = 100,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 19,
                Image = "../images/haiti8.png",
                Type = "Food & Drink",
                Title = "Haitian Cuisine Tasting Tour",
                Duration = "2 hours",
                Cost = "$45.00",
                Reviews = 120,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 20,
                Image = "../images/haiti9.png",
                Type = "Nature",
                Title = "Saut-Mathurine Waterfall Trek",
                Duration = "Half day",
                Cost = "$65.00",
                Reviews = 110,
                Destination = "Haiti"
            },
            new Tour()
            {
                Id = 21,
                Image = "../images/haiti10.png",
                Type = "Adventure",
                Title = "Mountain Hiking in Kenscoff",
                Duration = "Full day",
                Cost = "$80.00",
                Reviews = 150,
                Destination = "Haiti"
            },
            // Туры в Россию
            new Tour()
            {
                Id = 22,
                Image = "../images/russia1.png",
                Type = "Historical",
                Title = "Kremlin & Red Square Tour",
                Duration = "Half day",
                Cost = "$60.00",
                Reviews = 250,
                Destination = "Russia"
            },
            new Tour()
            {
                Id = 23,
                Image = "../images/russia2.png",
                Type = "Cultural",
                Title = "Hermitage Museum Exclusive",
                Duration = "Full day",
                Cost = "$100.00",
                Reviews = 280,
                Destination = "Russia"
            },
            new Tour()
            {
                Id = 24,
                Image = "../images/russia3.png",
                Type = "Nature",
                Title = "Baikal Lake Expedition",
                Duration = "Multi-day",
                Cost = "$400.00",
                Reviews = 150,
                Destination = "Russia"
            },
            new Tour()
            {
                Id = 25,
                Image = "../images/russia4.png",
                Type = "Adventure",
                Title = "Kamchatka Volcano Trek",
                Duration = "Multi-day",
                Cost = "$500.00",
                Reviews = 130,
                Destination = "Russia"
            },
            new Tour()
            {
                Id = 26,
                Image = "../images/russia5.png",
                Type = "Cultural",
                Title = "Trans-Siberian Railway Experience",
                Duration = "Multi-day",
                Cost = "$900.00",
                Reviews = 200,
                Destination = "Russia"
            },
            new Tour()
            {
                Id = 27,
                Image = "../images/russia6.png",
                Type = "Historical",
                Title = "Golden Ring Tour",
                Duration = "Full day",
                Cost = "$150.00",
                Reviews = 180,
                Destination = "Russia"
            },
            new Tour()
            {
                Id = 28,
                Image = "../images/russia7.png",
                Type = "Water Activities",
                Title = "St. Petersburg Canal Cruise",
                Duration = "2 hours",
                Cost = "$50.00",
                Reviews = 220,
                Destination = "Russia"
            },
            new Tour()
            {
                Id = 29,
                Image = "../images/russia8.png",
                Type = "Nature",
                Title = "Sochi Mountain Adventure",
                Duration = "Full day",
                Cost = "$120.00",
                Reviews = 170,
                Destination = "Russia"
            },
            new Tour()
            {
                Id = 30,
                Image = "../images/russia9.png",
                Type = "Adventure",
                Title = "Karelia Wilderness Safari",
                Duration = "Multi-day",
                Cost = "$350.00",
                Reviews = 190,
                Destination = "Russia"
            }
        };

        
    }
}