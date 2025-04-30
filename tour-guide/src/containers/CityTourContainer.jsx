import React, { useState } from "react";
import TourHeader from "../components/TourHeader.jsx";
import TourFeatures from "../components/TourFeatures.jsx";
import ReviewsContainer from "./ReviewsContainer.jsx";
import BookingForm from "../components/BookingForm.jsx";
import TourDescription from "../components/TourDescription.jsx";
import TourDetails from "../components/TourDetails.jsx";
import RelatedToursContainer from "./RelatedToursContainer.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/CityTourContainer.css";





const CityTourContainer = () => {
  const [tour] = useState({
    title: "Vintage Double Decker Bus Tour & Thames River Cruise",
    location: "Gothenburg",
    reviewsCount: 348,
    rating: 4.3,
    description: `See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus.

Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s architectural masterpiece, where Admirals Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.

Home to the Crown Jewels, the Tower is protected by the famous Beefeaters, and the imposing palace has been used as a fortress and a prison throughout its history. Your guide will take you to Traitors Gate, where prisoners entered the Tower for the last time.

Next, take a short trip along the River Thames, passing Shakespeare’s Globe, Cleopatra’s Needle, and London Bridge, before arriving at Westminster Pier. Rejoin the bus and head for Buckingham Palace. Make your way to the perfect spot to watch the world famous Changing of the Guard ceremony as the soldiers, dressed in their fabulous tunics and busbies, march to military music.`,
    activities: `Discover London on board a classic Routemaster vintage double decker bus
Cruise down the River Thames
See the Changing of the Guard
Go to Westminster Abbey
Listen to the chimes of Big Ben and see the Houses of Parliament`,
    includes: `Double-decker Routemaster tour
Short trip along the River Thames
Changing of the Guard
Gratuities`,
    notIncludes: `Double-decker Routemaster tour
Short trip along the River Thames
Changing of the Guard
Gratuities`,
    safety: `All required protective equipment is provided
All areas that customers touch are frequently cleaned
You must keep social distance while in vehicles
The number of visitors is limited to reduce crowds`,
    languages: `English
French`,
    meetingPoint: `Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). It's opposite the entrance to Aldgate East Tube Station and the Whitechapel Gallery. Look for a guide wearing SMT attire and holding a red SMT flag`,
    duration: "2 hours",
    numberOfPeople: "5 People",
    price: "$78.90",
  });

  const [reviews] = useState([
    {
      date: "2 October 2012",
      rating: 5,
      name: "Arlene McCoy",
      comment: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please",
      summary: "Good tour, really well organised",
      isHelpful: true,
    },
    {
      date: "2 October 2012",
      rating: 5,
      name: "Jenny Wilson",
      comment: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please",
      summary: "Informative but disappointed not seeing changing of the guards",
      isHelpful: true,
    },
    {
      date: "2 October 2012",
      rating: 5,
      name: "Ralph Edwards",
      comment: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please",
      summary: "I love their way of style",
      isHelpful: true,
    },
    {
      date: "2 October 2012",
      rating: 5,
      name: "Courtney Henry",
      comment: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please",
      summary: "Enjoyed very much",
      isHelpful: true,
    },
    {
      date: "2 October 2012",
      rating: 5,
      name: "Devon Lane",
      comment: "The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn't enjoy it. I'd like to ask the organisers: please",
      summary: "Nice!!!!!!!",
      isHelpful: true,
    },
  ]);

  const [relatedTours] = useState({
    today: [
      {
        image: "public/icons/rectangle1293710-6kpou-300w.png",
        title: "Alaska: Westminster to Greenwich River Thames",
        duration: "Duration 2 hours",
        price: "$35.00",
        reviewsCount: 584,
        hasTransport: true,
        hasFamilyPlan: true,
      },
      {
        image: "public/icons/rectangle1293710-1qxk-300w.png",
        title: "Alaska: Vintage Double Decker Bus Tour & Thames",
        duration: "Duration 2 hours",
        price: "$35.00",
        reviewsCount: 584,
        hasTransport: true,
        hasFamilyPlan: true,
      },
      {
        image: "public/icons/rectangle1293710-v568-300w.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at",
        duration: "Duration 2 hours",
        price: "$35.00",
        reviewsCount: 584,
        hasTransport: true,
        hasFamilyPlan: true,
      },
      {
        image: "public/icons/rectangle1293711-w3n-300w.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at",
        duration: "Duration 2 hours",
        price: "$35.00",
        reviewsCount: 584,
        hasTransport: true,
        hasFamilyPlan: true,
      },
    ],
    london: [
      {
        image: "icons/rectangle1293711-3g8-300w.png",
        title: "Alaska: Westminster to Greenwich River Thames",
        duration: "Duration 2 hours",
        price: "$35.00",
        reviewsCount: 584,
        hasTransport: true,
        hasFamilyPlan: true,
      },
      {
        image: "icons/rectangle1293711-xij7-300w.png",
        title: "Alaska: Vintage Double Decker Bus Tour & Thames",
        duration: "Duration 2 hours",
        price: "$35.00",
        reviewsCount: 584,
        hasTransport: true,
        hasFamilyPlan: true,
      },
      {
        image: "icons/rectangle1293712-rtab-300w.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at",
        duration: "Duration 2 hours",
        price: "$35.00",
        reviewsCount: 584,
        hasTransport: true,
        hasFamilyPlan: true,
      },
      {
        image: "icons/rectangle1293712-5ic-300w.png",
        title: "Alaska: Magic of London Tour with Afternoon Tea at",
        duration: "Duration 2 hours",
        price: "$35.00",
        reviewsCount: 584,
        hasTransport: true,
        hasFamilyPlan: true,
      },
    ],
  });

  const handleConfirmBooking = () => {
    alert("Booking confirmed!");
  };

  return (
    <div className="city-tour-container">
      <div className="city-tour-city-tour">
        <TourHeader title={tour.title} location={tour.location} reviewsCount={tour.reviewsCount} rating={tour.rating} />
        <TourFeatures />
        <ReviewsContainer initialReviews={reviews} />
        <BookingForm price={tour.price} onConfirm={handleConfirmBooking} />
        <TourDescription description={tour.description} />
        <TourDetails
          activities={tour.activities}
          includes={tour.includes}
          notIncludes={tour.notIncludes}
          safety={tour.safety}
          languages={tour.languages}
          meetingPoint={tour.meetingPoint}
          duration={tour.duration}
          numberOfPeople={tour.numberOfPeople}
        />
        <RelatedToursContainer tours={relatedTours} />
        <Footer />
        <div className="city-tour-frame466">
          <span className="city-tour-text326">tour guide</span>
          <div className="city-tour-frame464">
            <div className="city-tour-frame16">
              <span className="city-tour-text327">Home</span>
              <span className="city-tour-text328">About Us</span>
              <span className="city-tour-text329">Popular Destinations</span>
              <span className="city-tour-text330">Our Packages</span>
              <span className="city-tour-text331">Help</span>
            </div>
            <div className="city-tour-frame18">
              <span className="city-tour-text332">Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityTourContainer;