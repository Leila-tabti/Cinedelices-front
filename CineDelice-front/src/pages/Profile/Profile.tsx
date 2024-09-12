import React from 'react';
import './Profile.scss';
import { NavLink } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { ILoggedUser } from '../../types/types';

  interface ProfileProps {
    user: ILoggedUser | null
  } 

export default function Profile({user}: ProfileProps) {


  return (
  
          <>
            <header className='header-profile'>
                <h1 className='username'>Bienvenue User </h1>
            </header>
      
  
  
      <div className="container-profile">
        <div className="manage-container">
          <button><NavLink to ='/'>Retourner sur la page d'accueil</NavLink></button>
          <button>Profil</button>
          <button>Recettes favorites</button>
        </div>
        <div className="profile-container">
          <div className="profile-picture">
            
            <img src="https://imgs.search.brave.com/xkQzy2erxbjZTXfX1KvGzpfAR3uZcxHzeA621gHIm0k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wdWIt/c3RhdGljLmZvdG9y/LmNvbS9hc3NldHMv/cHJvamVjdHMvcGFn/ZXMvMjhkZmRkMWI2/Nzk4NGZkMDk1ZTM2/OGI3YzYwM2I3ZTQv/Zm90b3ItODg4M2Fi/ZGNhMDI4NGQxM2Ey/NTQyZjg4MTBiZjgx/NTYuanBn" alt="avatar" />
            </div>
          <div className="input-container">
            <div className="profile-pseudo">
              <input type="text" value="user pseudo" readonly/><FaRegEdit />
            </div>
            <div className="profile-mail">
            <input type="text" value="user@email.com " readonly/><FaRegEdit />
            </div>
          </div>
          <button>Créer votre recette !</button>
          
        </div>
      </div>
      </>
    )}
  



