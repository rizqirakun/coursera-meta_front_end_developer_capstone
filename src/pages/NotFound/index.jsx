import { Link } from 'react-router-dom';
import './not-found.scss';

const NotFound = () => {
  return (
    <div className="container page-not-found">
      <h2>404 not found</h2>
      <Link to={'/'}>Back to Home</Link>
    </div>
  );
};

export default NotFound;
