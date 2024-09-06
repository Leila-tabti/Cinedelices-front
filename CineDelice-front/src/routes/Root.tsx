import {React, useState, useEffect, createContext} from 'react';
import MoviesSeries from '../pages/MoviesSeries/MoviesSeries';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';
import { IUser } from '../types/types';


export function useRootContext() {
    return useOutletContext<IRootContext>();
}

export default function Root() {

    const [users, setUsers] = useState<IUser[] | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const stockedUser = localStorage.getItem('user');
            if(stockedUser) {
                setUser(JSON.parse(stockedUser));
            }

            const response = await fetch('http://localhost:3000/user');
            const data = await response.json();
            const newUser: IUser[] = data.user;
            setUsers(newUser);
        }
        fetchUsers();
    }, []);
    return (
        <>
            <Header />
            <NavBar />
            <Outlet context = {{users, setUsers}}/>
            <Footer />
        </>
    );
}

