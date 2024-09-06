import React, { useState } from 'react';
import './Register.scss';

export default function Register() {
    // State pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Fonction pour mettre à jour les données du formulaire
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value, // Met à jour la valeur en fonction du nom du champ
        });
    };

    // Fonction qui gère la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Validation basique des mots de passe avant d'envoyer les données au backend
        if (formData.password !== formData.confirmPassword) {
            alert("Le mot de passe ne correspond pas.");
            return;
        }

        try {
            // Envoi des données d'inscription au backend via une requête POST
            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json(); // On récupère la réponse JSON

            if (response.ok) {
                alert("Inscription réussie ! Bienvenue " + data.username);
                // Redirection ou autres actions après l'inscription réussie
            } else {
                alert("Erreur lors de l'inscription : " + data.message);
            }
        } catch (error) {
            console.error("Erreur serveur :", error);
            alert("Erreur serveur...");
        }
    };

    return (
        <>
            <h1>Envie de vous inscrire ?</h1>

            <form className="form-wrapper" onSubmit={handleSubmit}>
                <label className="label">
                    <h2>Pseudo</h2>
                    <span className="subtext">Choisissez votre pseudo :</span>
                    <input 
                        type="text" 
                        name="username" 
                        className="input"
                        value={formData.username} // Associer la valeur du champ au state
                        onChange={handleInputChange} // Appeler handleInputChange quand l'utilisateur tape
                    />
                </label>
                <label className="label">
                    <h2>Email</h2>
                    <span className="subtext">Renseignez votre email :</span>
                    <input 
                        type="email" 
                        name="email" 
                        className="input"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label className="label">
                    <h2>Mot de passe</h2>
                    <span className="subtext">Choisissez votre mot de passe :</span>
                    <input 
                        type="password" 
                        name="password" 
                        className="input"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </label>
                <label className="label">
                    <h2>Confirmez votre mot de passe</h2>
                    <span className="subtext">Confirmez votre mot de passe :</span>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        className="input"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit" className="submit-button">S'inscrire</button>
            </form>
        </>
    );
}
