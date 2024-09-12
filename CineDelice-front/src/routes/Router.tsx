import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Root from './Root';
import HomePage from '../pages/HomePage/HomePage';
import MoviesSeries from '../pages/MoviesSeries/MoviesSeries';
import Recipes from '../pages/Recipes/Recipes';
import LegalNotice from '../pages/LegalNotice/LegalNotice';
import Profile from '../pages/Profile/Profile';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Page404 from '../pages/404/404';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';
import Admin from '../pages/Admin/Admin';
import { ImProfile } from 'react-icons/im';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/404',
          element: <Page404/>,
        },
        {
          path: '/MoviesSeries',
          element: <MoviesSeries />,
        },
        {
          path: '/MoviesSeries/:MovieSerieId',
          element: <MovieDetails />,
        },
        {
          path: '/Recipes',
          element: < Recipes />,
        },
        {
          path: '/Recipes/:RecipeId',
          element: < RecipeDetails />,
        },
        {
          path: '/LegalNotice',
          element: < LegalNotice/>,
        },
        // {
        //   path: '/Profile',
        //   element: < Profile />,
        // },
        {
          path: '/About',
          element: < About />,
        },
        {
          path: '/Contact',
          element: < Contact />,
        },
        {
          path: '/register',
          element: < Register />,
        },
        {
          path: '/login',
          element: < Login />,
        },
        {
          path: '*',
          element: < Page404/>,
        },
      ],
    },
    {
      path: '/Profile',
      element: <PrivateRoute requiredRole="user"/>,
      children: [
       { 
        path: '',
        element: <Profile />,
       },
      ],
    },
    {
      path: '/Admin',
      element: <PrivateRoute requiredRole="admin"/>,
      children: [
        {
          path:'',
          element: <Admin />,
        }
      ]
    },
  ]);
  
  export default router;