import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonContainer({className}) {
    return (
        <div className={className}>
            <Link className='resumeButton' to='/resume'>RESUME</Link>
            <Link className='projectsButton' to='/projects'>PROJECTS</Link>
        </div>
    )
}
