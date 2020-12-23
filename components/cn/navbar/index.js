import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

// const routes = ['Home', 'Find a doctor', 'Apps', 'Testimonials', 'About Us'];
const routes = [
  {
    name: 'Home',
    anchor: 'hero',
  },
  {
    name: 'Find a doctor',
    anchor: 'services',
  },
  {
    name: 'Apps',
    anchor: 'contents',
  },
  {
    name: 'Testimonials',
    anchor: 'quotes',
  },
  {
    name: 'Blog',
    anchor: 'blog',
  },
  {
    name: 'About Us',
    anchor: 'footer',
  },
];

export default () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: '#458FF6' }}>
      <nav className="navbar">
        <div className="navbar__container container">
          <Link href="/" onClick={closeMobileMenu}>
            <span><img src="./assets/logo.svg" className="navbar__logo" alt="trafalgar logo" /></span>
          </Link>
          <button type="button" className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
            {routes.map((route) => (
              <li className="navbar__item">
                <Link className="navbar__link" href={`/#${route.anchor}`} onClick={closeMobileMenu}>
                  <span className="navbar__link">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};
