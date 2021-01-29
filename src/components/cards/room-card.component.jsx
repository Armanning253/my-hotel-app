import React from 'react'

import './room-card.styles.scss';

const RoomCard = ({ title, image }) => {
    console.log(title);
    return (
        <div className="card">

            <img
                className="card-image"
                src={image} />


            <div className="card-info">
                <h6>{title}</h6>
                <span>$200 per night</span>
            </div>
        </div>
    )
}

export default RoomCard;

