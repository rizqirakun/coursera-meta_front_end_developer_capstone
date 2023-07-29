import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';
import hamburgerIconMenu from '../icons/hamburger-menu.svg';

const navLinks = [
  { name: 'Home', anchor: '/' },
  { name: 'About', anchor: '' },
  { name: 'Menu', anchor: '' },
  { name: 'Reservation', anchor: '/reservation' },
];

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="grid nav-bar">
      <img src={logo} alt="Little Lemon logo" />
      <button type="button" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <img src={hamburgerIconMenu} alt="Navigation icon menu" />
      </button>
      <ul className={isNavExpanded ? 'expanded' : ''}>
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <Link to={navLink.anchor}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
