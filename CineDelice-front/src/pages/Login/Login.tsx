import React, { useState, FormEvent} from 'react';
import './Login.scss';
import { ILoggedUser, IRootContext } from '../../types/types';
import {Navigate, redirect, useOutletContext} from 'react-router-dom';
import { useRootContext } from '../../routes/Root';



export default function Login() {
    // State pour stocker les données du formulaire de connexion
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const {setUser} = useRootContext();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({email, password}),
            credentials: 'include'
        });

        const data = await response.json();
        if(data.logged) {
            const newUser: ILoggedUser = {
                userId: data.user.id,
                userPseudo: data.user.pseudo,
                userRole: data.user.role,
                userMail: data.user.email,
                accessToken: data.token
            };
            

            localStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser);
            setRedirect(true);
        }  else {
            throw new Error ('Identifiants incorrects');
        }
    };

    if(redirect) {
        return <Navigate to ="/" replace />;
    }

    return (
        <>
            <h1>Vous souhaitez vous connecter ?</h1>

            <form onSubmit={(e) => handleSubmit(e) }className="form-wrapper">
                <label className="label">
                    <h2>Pseudo ou Email</h2>
                    <span className="subtext">Renseignez votre pseudo ou email :</span>
                    <input 
                        type="text" 
                        id="email"
                        name="email"
                        className="input"
                        value={email} // Associer la valeur du champ au state
                        onChange={(e) => setEmail(e.target.value)} // Appeler handleInputChange quand l'utilisateur tape
                    />
                </label>
                <label className="label">
                    <h2>Mot de passe</h2>
                    <span className="subtext">Saisissez votre mot de passe :</span>
                    <input 
                        type="password" 
                        id="password"
                        name="password" 
                        
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit" className="submit-button">Se connecter</button>
            </form>
        </>
    );
}
