import {React, useState, useEffect} from 'react';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';
import {ILoggedUser, IRootContext }  from '../types/types';


export function useRootContext() {
    return useOutletContext<IRootContext>()
}

export default function Root() {

const [user, setUser] = useState<ILoggedUser | null>(null);

useEffect(() => {
    const stockedUser = localStorage.getItem('user');
    if(stockedUser) {
        try {
            const parsedUser = JSON.parse(stockedUser)
            console.log(parsedUser);
            setUser(parsedUser)
        } catch (error) {
            console.error('Error parsing JSON from localstorage', error);
        }
    }
},[])


const contextValue: IRootContext = {
    user,
    setUser,
   

}
   
    return (
        <>
            <Header user={user} />
            <NavBar />
            <Outlet context={contextValue} />
            <Footer />
        </>
    );
}

