import React, { useEffect, useState} from 'react';
import './Nav.css';
import logoo from './id_1.png';
import raphael from './raphael.jpg';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);




    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src={logoo}
            /* import logo image */
            alt="Rubes Technology"
            />

             <img className="nav__avatar"
                src={raphael}
                alt="Dugoafrica Logo"
            /* import logo image */
            />

        </div>
    )
}

export default Nav;