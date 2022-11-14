import React from 'react'

export default function Tile(date, name, position, location) {
    return (
        <div className="resume-container">
            <span className='duration'>
                <h3>{date}</h3>
                <h4>{name}</h4>
                <h5>{position}</h5>
                <h6>{location}</h6>
            </span>
            <span className='duration-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tempus eleifend leo ut pulvinar.
                Morbi efficitur posuere malesuada. Aenean venenatis
                rutrum nulla, et mollis justo fermentum hendrerit.
            </span>
        </div>
    )
}
