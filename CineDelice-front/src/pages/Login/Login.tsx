<<<<<<< HEAD
import React, { FormEvent, useState } from 'react';
import { useRootContext } from '../../routes/Root';
import { ILoggedUser } from '../../types/types';
import { Navigate } from 'react-router-dom';
import './Login.scss';

=======
import React, { useState, FormEvent} from 'react';
import './Login.scss';
import ILoggedUser from '../../types/types';
import {Navigate, redirect} from 'react-router-dom';
import { useRootContext } from '../../routes/Root';
>>>>>>> 63198687fb16fecf1e99902d4acea4cc19c6c0fb
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { user, setUser } = useRootContext();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

<<<<<<< HEAD
    // Validation des champs
    if (!email || !password) {
      setErrorMessage('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Erreur serveur');
      }

      const data = await response.json();
=======
        const data = await response.json();
        if(data.logged) {
            const newUser: ILoggedUser = {
                userId: data.userId,
                userEmail: data.userMail,
                accessToken: data.token
            };
            setUser(newUser);
>>>>>>> 63198687fb16fecf1e99902d4acea4cc19c6c0fb

      if (data.logged) {
        const loggedUser: ILoggedUser = {
          userId: data.userId,
          userName: data.userName,
          userMail: data.userMail,
          accessToken: data.token,
        };

        setUser(loggedUser);
        localStorage.setItem('user', JSON.stringify(loggedUser));
      } else {
        setErrorMessage('Identifiants incorrects.');
      }
    } catch (error) {
      setErrorMessage('Une erreur est survenue lors de la connexion.');
    }
  };

  // Redirection si l'utilisateur est déjà connecté
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (

        <div>
          <h2>Se connecter au site</h2>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Informations de connexion</legend>
      
              <div className="input-group">
                <label htmlFor="email">Votre email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
      
              <div className="input-group">
                <label htmlFor="password">Votre mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
      
              <button type="submit">Se connecter</button>
            </fieldset>
          </form>
        </div>
      );
    }
