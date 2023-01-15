import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Header() {
    const [navbarState, setNavbarState] = useState({
        burger: "",
        listContainer: ""
    });
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(toOpen) {
        setNavbarState(toOpen ? { burger: 'animation', listContainer: 'appearance' }
        : {burger: '', listContainer: ''});
    }

    return (
        <>
            <nav id="nav">
                <Link className="name" to={'/'}>
                    <FontAwesomeIcon icon={faSquareFull} color="blue" /> Eshenkulov
                    <span className="job"> / STUDENT</span>
                </Link>

                <div className={`burger ${navbarState.burger}`} onClick={() => {
                    setIsOpen(!isOpen)
                    handleClick(isOpen)}}>
                    <div className="rec-1"></div>
                    <div className="rec-2"></div>
                    <div className="rec-3"></div>
                </div>

                <div className={`list-container ${navbarState.listContainer}`}>
                    <ul>
                        <Link onClick={() => handleClick(false)} to='/'>ABOUT ME</Link>
                        <Link onClick={() => handleClick(false)} to='/resume'>RESUME</Link>
                        <Link onClick={() => handleClick(false)} to='/projects'>PROJECTS</Link>
                        <Link onClick={() => handleClick(false)} to='/contact'>CONTACT</Link>
                    </ul>
                </div>

            </nav>

        </>
    );

}
