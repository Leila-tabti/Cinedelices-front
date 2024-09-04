import React from 'react';
import chefImage from '../../assets/Pictures/404/ChefImage.png';
import './404.scss';
export default function Page404 () {
    
    return (
        <div className="error-page">
          <h1>Oups ! Cette scène semble manquer au scénario.</h1>
          <img src={chefImage} alt="Erreur 404 Chef" />
          <div className='error-page-text'>
          <p>
            La recette que vous cherchez a peut-être été coupée au montage ou n'existe pas. Revenez à la cuisine et trouvez d'autres délices à savourer !
          </p>
          <button className="categories-button"><a href="">Retour à la cuisine</a></button>
          </div>
        </div>
      );
    }