import React from "react";
import Slider from "react-slick"; // Ensure react-slick is imported
import "./Slider.scss";


// Import the images used in the carousel
import Photo1 from '../../../assets/Pictures/Recipes/Photo1.png';
import Photo2 from '../../../assets/Pictures/Recipes/Photo2.png';
import Photo3 from '../../../assets/Pictures/Recipes/Photo3.png';

// Import the images used in the carousel
import Photo1 from '../../../assets/Pictures/Recipes/caroussel1.png';
import Photo2 from '../../../assets/Pictures/Recipes/caroussel2.png';
import Photo3 from '../../../assets/Pictures/Recipes/caroussel3.png';

// Renamed the function from Slider to ImageSlider
export default function ImageSlider() {
  // Carousel configuration
  const settings = {

      dots: true, // Displays navigation dots
      infinite: true, // Enables infinite loop
      speed: 1000, // Transition speed in milliseconds
      slidesToShow: 1, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll on each click
      nextArrow: <div className="slick-arrow slick-next">❯</div>, // Custom next arrow
      prevArrow: <div className="slick-arrow slick-prev">❮</div>, // Custom previous arrow
      autosplaySpeed: 2000
  };

  return (
      <Slider {...settings}>
          <div>
              <img src={Photo1} alt="Recipe photo of Cherry Chocolate Tart" className="w-full object-cover" />
          </div>
          <div>
              <img src={Photo2} alt="Recipe photo of Mad Hatter's Onion Soup" className="w-full object-cover" />
          </div>
          <div>
              <img src={Photo3} alt="Recipe photo of Chicken with Chili and Chocolate Sauce" className="w-full object-cover" />
          </div>
      </Slider>
  );
}
