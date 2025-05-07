import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Piripake do Chavs</h1>
      <p>Bem-vindo ao sistema de divisão de contas!</p>

      <Link to="/event/create">
        <button type="button">Iniciar Piripake</button>
      </Link>

      <Link to="/events">
        <button type="button">Ver Eventos</button>
      </Link>
      <Link to="/participants">
        <button type="button">Ver Participantes</button>
      </Link>
    </div>
  );
};

export default HomePage;
