const navLinks = [
  { name: 'Home', link: '' },
  { name: 'About', link: '' },
  { name: 'Menu', link: '' },
  { name: 'Reservations', link: '' },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <a href={navLink.link}>{navLink.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
