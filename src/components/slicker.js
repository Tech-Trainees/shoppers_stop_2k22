
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/topRecommendations.css"
import SlideContent from "./slidecontent";
import RecommendationSlide from "./recommendationslide.js"
export default class Swipe extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 3,
      swipeToSlide: 2,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            centerPadding: "10px",
            slidesToScroll: 2,
        
          }
        },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              centerPadding: "10px",
              slidesToScroll: 1,
          
            }
          },
        
      ]
    
    };
    return (
      <div>
        <Slider {...settings} className="recommendation_slide" >
            <div ><RecommendationSlide/> </div>
            <div ><RecommendationSlide/> </div>
            <div ><RecommendationSlide/> </div>
            <div ><RecommendationSlide/> </div>
            <div ><RecommendationSlide/> </div>
            <div ><RecommendationSlide/> </div>
            <div ><RecommendationSlide/> </div>
            <div ><RecommendationSlide/> </div>

        </Slider>
        </div>
    )}
}