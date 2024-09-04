import React from 'react';
import './SignIn.scss';

export default function SignIn() {
    return (
        <>
            <h1>Vous souhaitez vous connectez ?</h1>

            <form className="form-wrapper">
                <label className="label">
                    <h2>Pseudo ou Email</h2>
                    <span className="subtext">Renseignez votre pseudo ou email :</span>
                    <input 
                        type="text" 
                        name="identifier" 
                        className="input"
                    />
                </label>
                <label className="label">
                    <h2>Mot de passe</h2>
                    <span className="subtext">Saisissez votre mot de passe :</span>
                    <input 
                        type="password" 
                        name="password" 
                        className="input"
                    />
                </label>
                <button type="submit" className="submit-button">Se connecter</button>
            </form>
        </>
    );
}
