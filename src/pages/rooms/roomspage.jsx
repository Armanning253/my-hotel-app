import React from 'react'
import { Link } from 'react-router-dom';

import Hotel_Data from '../../data/hotel.data';

import Hero from '../../components/hero/hero.component';
import Banner from '../../components/banner/banner.component';
import RoomCard from '../../components/cards/room-card.component';

import './rooms.styles.scss';

const RoomsPage = () => {
    const { rooms } = Hotel_Data;

    return (
        <div>
            <Hero hero="hero-room">
                <Banner title='new hotel rooms' subtitle='Accommodations in the heart of the city' />
            </Hero>
            <div className="room-card-grid">
                {
                    rooms.map((item) =>
                        <RoomCard
                            key={item.id}
                            title={item.title}
                            image='https://media.cntraveler.com/photos/5a29568bb70da5581cb857e4/16:9/w_2560%2Cc_limit/hilton-memphis-cr-courtesy.jpg'
                        />)
                }
            </div>


        </div >
    )
}

export default RoomsPage;

