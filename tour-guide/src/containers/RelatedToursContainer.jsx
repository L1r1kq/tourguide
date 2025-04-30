import React from "react";
import RelatedTourItem from "../components/RelatedTourItem";

const RelatedToursContainer = ({ tours }) => (
  <div className="city-tour-group426">
    <div className="city-tour-group288">
      {tours.today.map((tour, index) => (
        <div key={index} className={`city-tour-group${233 + index}`}>
          <RelatedTourItem
            image={tour.image}
            title={tour.title}
            duration={tour.duration}
            price={tour.price}
            reviewsCount={tour.reviewsCount}
            hasTransport={tour.hasTransport}
            hasFamilyPlan={tour.hasFamilyPlan}
          />
        </div>
      ))}
    </div>
    <div className="city-tour-group424">
      <span className="city-tour-text268">Related tours in Today</span>
      <div className="city-tour-group211">
        <div className="city-tour-group208">
          <img src="public/icons/ellipse573711-nv8n-200h.png" alt="Ellipse573711" className="city-tour-ellipse571" />
          <img src="public/icons/vector3711-ynai.svg" alt="Vector3711" className="city-tour-vector36" />
        </div>
        <div className="city-tour-group209">
          <img src="public/icons/ellipse583711-und-200h.png" alt="Ellipse583711" className="city-tour-ellipse581" />
          <img src="public/icons/vector3711-zv8.svg" alt="Vector3711" className="city-tour-vector37" />
        </div>
      </div>
    </div>
    <div className="city-tour-group427">
      <div className="city-tour-group422">
        {tours.london.map((tour, index) => (
          <div key={index} className={`city-tour-group${233 + index}`}>
            <RelatedTourItem
              image={tour.image}
              title={tour.title}
              duration={tour.duration}
              price={tour.price}
              reviewsCount={tour.reviewsCount}
              hasTransport={tour.hasTransport}
              hasFamilyPlan={tour.hasFamilyPlan}
            />
          </div>
        ))}
      </div>
      <div className="city-tour-group425">
        <span className="city-tour-text297">Related tours in London</span>
        <div className="city-tour-group423">
          <div className="city-tour-group208">
            <img src="public/icons/ellipse573712-kn7v-200h.png" alt="Ellipse573712" className="city-tour-ellipse572" />
            <img src="public/icons/vector3712-lm3d.svg" alt="Vector3712" className="city-tour-vector50" />
          </div>
          <div className="city-tour-group209">
            <img src="public/icons/ellipse583712-tcnk-200h.png" alt="Ellipse583712" className="city-tour-ellipse582" />
            <img src="public/icons/vector3712-1com.svg" alt="Vector3712" className="city-tour-vector51" />
          </div>
        </div>
      </div>
    </div>
    <img src="public/icons/rectangle2103712-nrg-200h.png" alt="Rectangle2103712" className="city-tour-rectangle210" />
    <img src="public/icons/rectangle2123712-z643-200h.png" alt="Rectangle2123712" className="city-tour-rectangle212" />
    <img src="public/icons/rectangle2113712-ixy-200h.png" alt="Rectangle2113712" className="city-tour-rectangle211" />
  </div>
);

export default RelatedToursContainer;