import React from 'react';
import './SignUp.scss';

export default function SignUp() {
    return (
        <>
            <h1>Bienvenue sur la page d'Inscription !</h1>

            <form className="form-wrapper">
                <label className="label">
                    <h2>Pseudo</h2>
                    <span className="subtext">Choisissez votre pseudo :</span>
                    <input 
                        type="text" 
                        name="username" 
                        className="input"
                    />
                </label>
                <label className="label">
                    <h2>Email</h2>
                    <span className="subtext">Renseignez votre email :</span>
                    <input 
                        type="email" 
                        name="email" 
                        className="input"
                    />
                </label>
                <label className="label">
                    <h2>Mot de passe</h2>
                    <span className="subtext">Choisissez votre mot de passe :</span>
                    <input 
                        type="password" 
                        name="password" 
                        className="input"
                    />
                </label>
                <label className="label">
                    <h2>Mot de passe</h2>
                    <span className="subtext">Confirmez votre mot de passe :</span>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        className="input"
                    />
                </label>
                <button type="submit" className="submit-button">S'inscrire</button>
            </form>
        </>
    );
}
