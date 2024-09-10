import {React, useState} from 'react';
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

const contextValue: IRootContext = {
    user,
    setUser
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

