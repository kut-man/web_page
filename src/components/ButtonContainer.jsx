import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonContainer({className}) {
    return (
        <div className={className}>
            <Link to='/resume'>RESUME</Link>
            <Link to='/projects'>PROJECTS</Link>
        </div>
    )
}
