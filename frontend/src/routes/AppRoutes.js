import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EventPage from '../pages/EventPage';
import NotFound from '../pages/NotFound';
import EventForm from '../components/event/EventForm';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/*Rota Home */ }
        <Route path="/events" element={<EventPage />} /> {/*Rota de Eventos */ }
        <Route path="/event/:id" element={<EventPage />} /> {/*Rota de um Evento em especifico */ }
        <Route path="/event/create" element={<EventForm />} /> {/*Rota de criação de Eventos    */ }
        <Route path="*" element={<NotFound />} /> {/*Rota de pagina não encontrada */ }
      </Routes>
    </Router>
  );
};

export default AppRoutes;
