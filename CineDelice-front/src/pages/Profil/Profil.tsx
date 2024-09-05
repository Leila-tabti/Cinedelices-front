import React from 'react';
import avatar from '../../assets/Pictures/Profil/avatar.png';
import './Profil.scss';
import { FaShieldAlt , FaUser, FaEnvelope } from 'react-icons/fa';

export default function Profil() {
    return (
        <div className="profil">
        <h1 className="title">Bienvenue dans ton studio perso!</h1>
        <div className="avatar">
        <img src={avatar} alt="avatar" />
        <h2 className="pseudo">Pseudo</h2>
        <div className="background-profil">
            <p className="info"><FaUser /> Nom Prénom</p>
            <p className="info"><FaShieldAlt  /> Rôle</p>
            <p className="info"><FaEnvelope /> email@example.com</p>
        </div>
        
        </div>
      </div>
    );
  };
  
