import banner from '../assets/img/banner-1.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="grid">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/">Reserve a table</a>
        </div>
        <div className="hero-right">
          <img src={banner} alt="Restaurant food" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
