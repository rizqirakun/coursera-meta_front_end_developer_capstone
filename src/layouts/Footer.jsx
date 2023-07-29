import './footer.scss';

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerLogo from '../assets/img/footer-logo.png';

const contacts = [
  { icon: faLocationDot, info: 'address' },
  { icon: faPhone, info: '123455' },
  { icon: faEnvelope, info: 'contact@littlelemon.com' },
];

const socials = [
  { icon: faFacebook, name: 'facebook' },
  { icon: faTwitter, name: 'twitter' },
  { icon: faInstagram, name: 'instagram' },
  { icon: faYoutube, name: 'youtube' },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img className="site-footer-logo" src={footerLogo} alt="Little Lemon" />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
