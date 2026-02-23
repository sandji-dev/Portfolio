import { Link } from 'react-router-dom';
import './Notfound.scss';

const Notfound = () => {
  return (
    <div className="notfound">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-text">Oups ! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="notfound-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Notfound;