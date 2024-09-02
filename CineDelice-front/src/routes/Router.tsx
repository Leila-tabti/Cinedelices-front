import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Root from './Root';
import HomePage from '../pages/HomePage/HomePage';
import MoviesSeries from '../pages/MoviesSeries/MoviesSeries';
import Recipes from '../pages/Recipes/Recipes';
import LegalNotice from '../pages/LegalNotice/LegalNotice';
import Profil from '../pages/Profil/Profil';
import About from '../pages/About/About';


const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/MoviesSeries',
          element: <MoviesSeries />,
        },
        {
          path: '/Recipes',
          element: < Recipes />,
        },
        {
          path: '/LegalNotice',
          element: < LegalNotice/>,
        },
        {
          path: '/Profil',
          element: < Profil />,
        },
        {
          path: '/About',
          element: < About />,
        },
      ],
    },
  ]);
  
  export default router;