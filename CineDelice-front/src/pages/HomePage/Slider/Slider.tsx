import React from "react";
import Slider from "react-slick"; // Assure-toi que react-slick est bien importé
import "./Slider.scss";

// Importation des images utilisées dans le carrousel
import Photo1 from '../../../assets/Pictures/Recipes/Photo1.png';
import Photo2 from '../../../assets/Pictures/Recipes/Photo2.png';
import Photo3 from '../../../assets/Pictures/Recipes/Photo3.png';

// Renommage de la fonction Slider en ImageSlider
export default function ImageSlider() {
  // Configuration du carrousel
  const settings = {
      dots: true, // Affiche les points de navigation
      infinite: true, // Boucle infinie
      speed: 1000, // Vitesse de transition
      slidesToShow: 1, // Nombre de slides visibles à la fois
      slidesToScroll: 1, // Nombre de slides à faire défiler à chaque clic
      nextArrow: <div className="slick-arrow slick-next">❯</div>,
      prevArrow: <div className="slick-arrow slick-prev">❮</div>,
  };

  return (
      
              <Slider {...settings}>
                  <div>
                      <img src={Photo1} alt="Photo de la recette de la Tarte cerise au chocolat" className="w-full object-cover" />
                  </div>
                  <div>
                      <img src={Photo2} alt="Photo de la recette de la Soupe à l'oignon du Chapelier Fou" className="w-full object-cover" />
                  </div>
                  <div>
                      <img src={Photo3} alt="Photo de la recette du Poulet sauce piment et chocolat" className="w-full object-cover" />
                  </div>
              </Slider>
  );
}
