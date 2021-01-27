import React from 'react'

import './hero.styles.scss';

const Hero = ({ hero, children }) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

export default Hero;

{/* <header className={hero}>
        hello from hero
        {children}
    </header> */}