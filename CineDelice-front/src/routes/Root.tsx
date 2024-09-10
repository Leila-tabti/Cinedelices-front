import { React, useState, useEffect, createContext } from 'react';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom'; // Ajout de useNavigate pour rediriger si besoin
import { IUser } from '../types/types';
import { IRootContext } from '../types/types';



<<<<<<< HEAD
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const stockedUser = localStorage.getItem('user');
            const token = localStorage.getItem('token'); // Récupérer le token ici

            if (stockedUser) {
                setUser(JSON.parse(stockedUser)); // Récupérer l'utilisateur depuis le stockage local si présent
            }

            // Si le token est manquant, l'utilisateur n'est pas authentifié
            if (!token) {
                console.log("Pas de token trouvé, redirection vers la page de login");
                navigate("/login"); // Rediriger vers la page de login si pas de token
                return;
            }

            // Faire une requête pour récupérer les infos utilisateur avec le token
            const response = await fetch('http://localhost:3000/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Envoi du token dans le header
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 401) {
                console.log("Token invalide, redirection vers la page de login");
                navigate("/login"); // Rediriger si le token est invalide
            } else {
                const data = await response.json();
                setUser(data.user); // Mettre à jour l'état utilisateur avec les données du backend
            }
        }

        fetchUser();
    }, [navigate]);

=======

export default function Root() {

   
>>>>>>> 63198687fb16fecf1e99902d4acea4cc19c6c0fb
    return (
        <>
            <Header />
            <NavBar />
<<<<<<< HEAD
            <Outlet context={{ user, setUser }} />
=======
            <Outlet />
>>>>>>> 63198687fb16fecf1e99902d4acea4cc19c6c0fb
            <Footer />
        </>
    );
}
