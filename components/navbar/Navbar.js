import React, { useState } from 'react'
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <IconContext.Provider value={{ color: '#458FF6' }}>
            <nav className="navbar">
                <div className="navbar__container container">
                    <Link href="/" onClick={closeMobileMenu}>
                        <a>
                            <img src="./assets/logo.svg" className="navbar__logo" alt="trafalgar logo" />
                        </a>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
                        <li className="navbar__item">
                            <Link href="/" onClick={closeMobileMenu}>
                                <a className="navbar__link">Home</a>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link href="/" onClick={closeMobileMenu}>
                                <a className="navbar__link">Find a doctor</a>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link href="/" onClick={closeMobileMenu}>
                                <a className="navbar__link">Apps</a>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link href="/" onClick={closeMobileMenu}>
                                <a className="navbar__link">Testimonials</a>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link href="/" onClick={closeMobileMenu}>
                                <a className="navbar__link">About Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </IconContext.Provider>
    )
}

export default Navbar