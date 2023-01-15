import React from 'react'

export default function Tile({values}) {
    return (
        <div className="resume-container">
            <span className='duration'>
                <h3>{values.date}</h3>
                <h4>{values.name}</h4>
                <h5>{values.position}</h5>
                <h6>{values.location}</h6>
            </span>
            <span className='duration-description'>{values.description}</span>
        </div>
    )
}
