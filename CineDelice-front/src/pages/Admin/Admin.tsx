import React, {useEffect, useState} from 'react';
import '../Profile/Profile.scss';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useRootContext } from '../../routes/Root';

export default function Admin() {

  const [profileData, setProfileData] = useState<any>(null);  // State to store profile data

  const [error, setError] = useState<string | null>(null);  // State to store error messages
  const {recipes, setRecipes, ingredients} = useRootContext();  // Get recipes, setRecipes, and ingredients from context
  const navigate = useNavigate();  // Hook for navigation


  useEffect(() => {
    const fetchProfileData = async () => {  // Function to fetch profile data
      const storedUser = localStorage.getItem('user');  // Retrieve user data from localStorage
      if (!storedUser) {
        navigate('/login');  // Redirect to login if no user data is found
        return;
      }
      const user = JSON.parse(storedUser);  // Parse the user data
      const userId = user.userId;  // Extract user ID

      try {
        const response = await fetch(`http://localhost:3000/admin/${userId}`, {
          method: 'GET',  // GET request to fetch profile data
          credentials: 'include',  // Include credentials in the request
        });
        console.log('Fetch Checked');  // Log to confirm fetch
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données du profil');  // Throw error if response is not ok
        }

        const data = await response.json();  // Parse the response data
        console.log('Profile data received:', data);  // Log the received data
        setProfileData(data);  // Set profile data to state
      } catch (error) {
        console.error('Erreur', error);  // Log any errors
        setError('Une erreur est survenue. Veuillez réessayer.');  // Set error message
      }
    };

    fetchProfileData();  // Call the function to fetch profile data
  }, [navigate]);  // Dependency array with navigate

  if (error) {
    return (
      <div className='error-message'>
        <p>{error}</p>  // Display error message
        <NavLink to='/login'>Retourner à la page de connexion</NavLink>  // Link to login page
      </div>
    );
  }

  if (!profileData) {
    return <p>Chargement...</p>;  // Display loading message if profile data is not available
  }

  // Additional rendering logic for profile data goes here


    return (
        <>
        <header className='header-profile'>
        <h1 className='username'>Bienvenue Administrateurs </h1>
        </header>
        
        <div className="container-profile">
          <div className="manage-container">
            <button><NavLink to ='/'>Retourner sur la page d'accueil</NavLink></button>
            <button><NavLink to ='/Admin/ManageUsers'>Gestion des utilisateurs</NavLink></button>
            <button> <NavLink to ='/Admin/ManageRecipes'>Gestion des Recettes</NavLink></button>
            <button>Gestion des Films et Series</button>
          </div>
          <div className="profile-container">
           
          <Outlet context={{recipes, setRecipes, ingredients, recipeCategory, profileData, moviesSeries}}/>
            
          </div>
        </div>
        </>
    );
  }





