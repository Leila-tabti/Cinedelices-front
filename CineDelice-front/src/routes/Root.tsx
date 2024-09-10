import {React} from 'react';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';
import  ILoggedUser  from '../types/types';




export default function Root() {

   
    return (
        <>
            <Header />
            <NavBar />
            <Outlet context={useOutletContext<ILoggedUser>()} />
            <Footer />
        </>
    );
}

