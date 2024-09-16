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
        <div>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <fieldset>
                    <legend>Informations de connexion</legend>

                    <div className="input-group">
                        <label htmlFor="emailOrPseudo">
                        Pseudo ou Email
                        </label>
                        <input
                        type="text"
                        id="emailOrPseudo"
                        name="emailOrPseudo"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">
                        Mot de passe
                        </label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>

                <button type="submit" className="submit-button">Se connecter</button>
                </fieldset>
            </form>
        </div>    

    );
}
