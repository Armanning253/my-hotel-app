import React from 'react'

import Hero from '../../components/hero/hero.component';
import Banner from '../../components/banner/banner.component';

const Homepage = () => {
    return (
        <div>
            <Hero hero="hero">
                <Banner title="hotel romano" subtitle="Come see what you have been missing">
                    button
                </Banner>
            </Hero>

        </div>
    )
}

export default Homepage;
