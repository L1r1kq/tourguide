import React from "react";

const TourDetails = ({ activities, includes, notIncludes, safety, languages, meetingPoint, duration, numberOfPeople }) => (
  <div className="city-tour-group477">
    <span className="city-tour-text186">Activity</span>
    <span className="city-tour-text187">What is included / not included</span>
    <span className="city-tour-text188">Safety</span>
    <span className="city-tour-text189">Details</span>
    <span className="city-tour-text190">Includes</span>
    <span className="city-tour-text191">Not Includes</span>
    <div className="city-tour-group420">
      <span className="city-tour-text192">What you will do</span>
      <div className="city-tour-group416">
        <span className="city-tour-text193">{activities}</span>
        <div className="city-tour-group4151">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={`public/icons/ellipse${62 + i}3799-${i === 0 ? "ehmi" : i === 1 ? "ypb" : i === 2 ? "4vk" : i === 3 ? "wai3" : "b57h"}-200h.png`}
              alt={`Ellipse${62 + i}3799`}
              className={`city-tour-ellipse${62 + i}1`}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="city-tour-group417">
      <span className="city-tour-text203">{includes}</span>
      <div className="city-tour-group4152">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            src={`public/icons/ellipse${62 + i}3710-${i === 0 ? "dkcq" : i === 1 ? "g16m" : i === 2 ? "4k7" : "9f6c"}-200h.png`}
            alt={`Ellipse${62 + i}3710`}
            className={`city-tour-ellipse${62 + i}2`}
          />
        ))}
      </div>
    </div>
    <div className="city-tour-group418">
      <span className="city-tour-text211">{notIncludes}</span>
      <div className="city-tour-group4153">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            src={`public/icons/ellipse${62 + i}3710-${i === 0 ? "r6da" : i === 1 ? "bez9" : i === 2 ? "5bl" : "ea5o"}-200h.png`}
            alt={`Ellipse${62 + i}3710`}
            className={`city-tour-ellipse${62 + i}3`}
          />
        ))}
      </div>
    </div>
    <div className="city-tour-group421">
      <span className="city-tour-text219">Health precautions</span>
      <div className="city-tour-group419">
        <span className="city-tour-text220">{safety}</span>
        <div className="city-tour-group4154">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={`public/icons/ellipse${62 + i}3710-${i === 0 ? "q3u" : i === 1 ? "hu3" : i === 2 ? "nbem" : "3art"}-200h.png`}
              alt={`Ellipse${62 + i}3710`}
              className={`city-tour-ellipse${62 + i}4`}
            />
          ))}
        </div>
      </div>
    </div>
    <span className="city-tour-text228">Language</span>
    <span className="city-tour-text229">Meeting point address</span>
    <span className="city-tour-text230">Duration</span>
    <span className="city-tour-text231">Number of people</span>
    <span className="city-tour-text232">{languages}</span>
    <span className="city-tour-text236">{meetingPoint}</span>
    <span className="city-tour-text237">{duration}</span>
    <span className="city-tour-text238">{numberOfPeople}</span>
    {[...Array(5)].map((_, i) => (
      <img
        key={i}
        src={`public/icons/ellipse${62 + i}3710-${i === 0 ? "gm7b" : i === 1 ? "cian" : i === 2 ? "ltuo" : i === 3 ? "aqlz" : "jlje"}-200h.png`}
        alt={`Ellipse${62 + i}3710`}
        className={`city-tour-ellipse${62 + i}5`}
      />
    ))}
    <img src="public/icons/rectangle2063710-zlsp-200h.png" alt="Rectangle2063710" className="city-tour-rectangle206" />
    <img src="public/icons/rectangle2073710-e47g-200h.png" alt="Rectangle2073710" className="city-tour-rectangle207" />
    <img src="public/icons/rectangle2093710-n6m-200h.png" alt="Rectangle2093710" className="city-tour-rectangle209" />
    <img src="public/icons/rectangle2083710-h92m-400h.png" alt="Rectangle2083710" className="city-tour-rectangle208" />
    <span className="city-tour-text239">Open in Google Maps</span>
  </div>
);

export default TourDetails;