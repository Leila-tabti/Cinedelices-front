import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderAuth.scss';

export default function HeaderAuth() { 
    return (
        <>
            <nav className="header-auth active">
                <ul className="auth-list">
                <li className="auth-item "><NavLink to ='/login'>Connexion</NavLink></li>
                <li className="auth-item"><NavLink to ='/register'>Inscription</NavLink></li>
                </ul>
            </nav>
        </>
    );
}
