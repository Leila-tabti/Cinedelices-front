import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation des champs
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            setErrorMessage("Tous les champs doivent être remplis.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Le mot de passe et la confirmation doivent correspondre.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrorMessage(`Erreur lors de l'inscription : ${data.message}`);
                return;
            }

            const data = await response.json();
            alert(`Inscription réussie ! Bienvenue ${data.username}`);
            navigate('/login');
        } catch (error) {
            setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        
        <div>
          <h2>Créer un compte</h2>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Informations d'inscription</legend>
      
              <div className="input-group">
                <label htmlFor="username">Pseudo</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
      
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
      
              <div className="input-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
      
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirmez votre mot de passe</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
      
              <button type="submit">S'inscrire</button>
            </fieldset>
          </form>
        </div>
      );
    }
      