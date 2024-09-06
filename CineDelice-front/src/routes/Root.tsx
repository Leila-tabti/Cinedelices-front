import React from 'react';
import MoviesSeries from '../pages/MoviesSeries/MoviesSeries';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';
import { Outlet, useOutletContext } from 'react-router-dom';

// je défini un décorateur pour mon useOutletContext
export function useRootContext() {
    return useOutletContext<IRootContext>();
  }

export default function Root() {

    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}
