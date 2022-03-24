import React from 'react'

export default function Tile(date, name, position, location, description) {
    return (
        <div className="resume-container">
            <span className='duration'>
                <h3>{date}</h3>
                <h4>{name}</h4>
                <h5>{position}</h5>
                <h6>{location}</h6>
            </span>
            <span className='duration-description'>
                {description}
            </span>
        </div>
    )
}
