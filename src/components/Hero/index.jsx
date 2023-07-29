import { Link } from 'react-router-dom';

import './hero.css';
import banner from '../../assets/img/banner-1.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to={'/reservation'}>
            Reserve a table
          </Link>
        </div>
        <img className="hero-image" src={banner} alt="Restaurant banner" />
      </div>
    </section>
  );
};

export default Hero;
