import React from "react";
import '../styles/main.css'
import '../styles/reset.css'
import '../styles/styles.css'
import ActivityCardContainer from "./ActivityCardContainer";
import ActivityButton from "../components/ACtivityButtons";

function ActivitiesContainer(){
    const activities = [
        {
          title: "Water Activities",
      color: "",
      activities: [
        {
          id: 0,
          image: "./img/cart_1_tim.png",
          title: "Alaska: Westminster to Greenwich River Thames",
          duration: "2 hours",
          reviews: 584,
          price: "$35.00",
        },
          {
            image: "./img/cart_2_tim.png",
            title: "Alaska: Westminster to Greenwich River Thames",
            duration: "2 hours",
            reviews: 584,
            price: "$35.00",
          },
          {
            image: "./img/cart_3_tim.png",
            title: "Alaska: Westminster to Greenwich River Thames",
            duration: "2 hours",
            reviews: 584,
            price: "$35.00",
          },
          {
            image: "./img/cart_4_tim.png",
            title: "Alaska: Westminster to Greenwich River Thames",
            duration: "2 hours",
            reviews: 584,
            price: "$35.00",
          }],
          },
          {
            title: "WATER ACTIVITIES",
            color: "b1_tim",
            isFirst: false,
            activities: [
            {
              image: "./img/cart_1_tim.png",
              title: "Alaska: Westminster to Greenwich River Thames",
              duration: "2 hours",
              reviews: 584,
              price: "$35.00",
            },
            {
              image: "./img/cart_2_tim.png",
              title: "Alaska: Westminster to Greenwich River Thames",
              duration: "2 hours",
              reviews: 584,
              price: "$35.00",
            },
            {
              image: "./img/cart_3_tim.png",
              title: "Alaska: Westminster to Greenwich River Thames",
              duration: "2 hours",
              reviews: 584,
              price: "$35.00",
            },
            {
              image: "./img/cart_4_tim.png",
              title: "Alaska: Westminster to Greenwich River Thames",
              duration: "2 hours",
              reviews: 584,
              price: "$35.00",
            }],
            },
            {
              title: "WATER ACTIVITIES",
              color: "b2_tim",
              isFirst: false,
              activities: [
              {
                image: "./img/cart_1_tim.png",
                title: "Alaska: Westminster to Greenwich River Thames",
                duration: "2 hours",
                reviews: 584,
                price: "$35.00",
              },
              {
                image: "./img/cart_2_tim.png",
                title: "Alaska: Westminster to Greenwich River Thames",
                duration: "2 hours",
                reviews: 584,
                price: "$35.00",
              },
              {
                image: "./img/cart_3_tim.png",
                title: "Alaska: Westminster to Greenwich River Thames",
                duration: "2 hours",
                reviews: 584,
                price: "$35.00",
              },
              {
                image: "./img/cart_4_tim.png",
                title: "Alaska: Westminster to Greenwich River Thames",
                duration: "2 hours",
                reviews: 584,
                price: "$35.00",
              }],
          }];

    return(
        <>
        <div class="Tim_tim">
            <div class="outside_tim">
                <h1 class="title_tim">
                    Outside The City Specials
                </h1>
                <hr class="line_tim"/>
                {
                    activities.map((activity, index) => (
                        <>
                        <ActivityButton title={activity.title} color={activity.color}/>
                        <ActivityCardContainer key={index} activities={activity.activities}/>
                        </>
                    ))
                }
            </div>
        </div>
        </>
    );
}

export default ActivitiesContainer;