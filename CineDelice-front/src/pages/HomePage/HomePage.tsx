import React from 'react';
import './HomePage.scss';
import Slider from '../HomePage/Slider/Slider';
import Slogan from '../HomePage/Slogan/Slogan';
import LastRecipes from '../HomePage/LastRecipes/LastRecipes';

export default function HomePage() {

    return (
        <>
            <section className="landing_page">
                {/* Slides*/}

                <Slider />
                <Slogan />

            </section>

                <LastRecipes />
        </>
    );
}
