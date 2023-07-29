import logo from '../assets/img/logo.png';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" />
      <Nav />
    </header>
  );
};

export default Header;
