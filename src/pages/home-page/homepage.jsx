import React from 'react'

import Hero from '../../components/hero/hero.component';
import Banner from '../../components/banner/banner.component';

const Homepage = ({ hotel }) => {
    return (
        <div>
            <Hero hero="hero-main">
                <Banner title={hotel} subtitle="Come see what you have been missing"></Banner>
            </Hero>


        </div>
    )
}

export default Homepage;
