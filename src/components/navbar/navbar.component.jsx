import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const Navbar = () => {
    return (
        <div className="nav-container">
            <Link className="logo-container" to="/" > hotel Ramono</Link>
            <div className="options">
                <Link className="option" to="/rooms">Rooms</Link>
                <Link className="option" to="/dining">dining</Link>
                <Link className="option" to="/events">events</Link>
                <Link className="option" to="/reservation">reservation</Link>
            </div>
        </div>
    )
}

export default Navbar;
