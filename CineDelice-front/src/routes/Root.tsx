import React from 'react';
import MoviesSeries from '../pages/MoviesSeries/MoviesSeries';
import NavBar from '../components/App/Navbar/Navbar';
import Footer from '../components/App/Footer/Footer';
import Header from '../components/App/Header/Header';



export default function Root() {

    return (
        <>
            <Header />
            <NavBar />
            <MoviesSeries />
            <Footer />
        </>
    );
}
