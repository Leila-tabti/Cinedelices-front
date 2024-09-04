import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Root from './Root';
import HomePage from '../pages/HomePage/HomePage';
import MoviesSeries from '../pages/MoviesSeries/MoviesSeries';
import Recipes from '../pages/Recipes/Recipes';
import LegalNotice from '../pages/LegalNotice/LegalNotice';
import Profil from '../pages/Profil/Profil';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';


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
        {
          path: '/Contact',
          element: < Contact />,
        },
        {
          path: '/Signin',
          element: < SignIn />,
        },
        {
          path: '/Signup',
          element: < SignUp />,
        },
      ],
    },
  ]);
  
  export default router;