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
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </span>
        </div>
    )
}
