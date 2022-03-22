import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Burger from './Burger';

export default function Header() {

    function closeMenu() {
        document.querySelector('.list-container').classList.remove("appearance");
        document.querySelector('.burger').classList.remove("animation")
    }

    return (
        <>
            <nav id="nav">
                <Link className="name" to={'/'}>
                    <FontAwesomeIcon icon={faSquareFull} color="blue" /> Eshenkulov
                    <span className="job"> / STUDENT</span>
                </Link>

                <Burger />

                <div className={'list-container'}>
                    <ul>
                        <Link onClick={closeMenu} to='/'>ABOUT ME</Link>
                        <Link onClick={closeMenu} to='/resume'>RESUME</Link>
                        <Link onClick={closeMenu} to='/projects'>PROJECTS</Link>
                        <Link onClick={closeMenu} to='/contact'>CONTACT</Link>
                    </ul>
                </div>

            </nav>

        </>
    );

}
