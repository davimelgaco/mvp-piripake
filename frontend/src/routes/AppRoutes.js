import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EventPage from '../pages/EventPage';
import NotFound from '../pages/NotFound';
import EventForm from '../components/event/EventForm';
import CalculationPage from '../pages/CalculationPage';
import ParticipantPage from '../pages/ParticipantsPage';
import EventConsumptionPage from '../pages/EventConsumptionPage';



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/*Rota Home */ }
        <Route path="/events" element={<EventPage />} /> {/*Rota de Eventos */ }
        <Route path="/participants" element={<ParticipantPage />} /> {/*Rota de Participantes */ }
        <Route path="/event/:id" element={<EventPage />} /> {/*Rota de um Evento em especifico */ }
        <Route path="/event/create" element={<EventForm />} /> {/*Rota de criação de Eventos    */ }
        <Route path="/event/:id/consumption" element={<EventConsumptionPage />} /> {/*Rota de criação de Eventos    */ }
        <Route path="/event/:id/calculate" element={<CalculationPage />} /> {/* Rota de Fechamento da Conta */}
        <Route path="*" element={<NotFound />} /> {/*Rota de pagina não encontrada */ }
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
 