import React from 'react';
import './HomePage.scss';
import Slider from '../HomePage/Slider/Slider';
import Slogan from '../HomePage/Slogan/Slogan';
import LastRecipes from '../HomePage/LastRecipes/LastRecipes';

export default function HomePage() {

    return (
        <main>
            <section className="landing_page">
                {/* Slides*/}
                <Slogan />
                <Slider />
                

            </section>

                <LastRecipes />
        </main>
    );
}
