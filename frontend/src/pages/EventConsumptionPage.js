import { useParams, useNavigate } from 'react-router-dom';
import ConsumptionForm from '../components/consumption/ConsumptionForm';
import ConsumptionList from '../components/consumption/ConsumptionList';
import EventConsumptionSummary from '../components/summary/EventConsumptionSummary';
import { useState } from 'react';


const EventConsumptionPage = () => {
const { id: eventId } = useParams(); // ← agora funciona
    const navigate = useNavigate();
    const [reload, setReload] = useState(false); // Para atualizar lista após adicionar
  
    const handleReload = () => setReload(!reload);
    console.log('eventId enviado para o ConsumptionList:', eventId);


    return (
    
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Fazer a Conta Do PIRAPAKEE{eventId}</h1>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <ConsumptionForm eventId={eventId} onSuccess={handleReload} />
      </div>
      <div>
        <ConsumptionList eventId={eventId} reload={reload} />
      </div>
    </div>

    <div className="mt-8">
      <EventConsumptionSummary eventId={eventId} />
    </div>
    <button onClick={() => navigate(`/event/${eventId}/calculate`)}>Calculo final</button>
    <button onClick={() => navigate('/events')} className="mb-4 text-blue-500 hover:underline">
      ← Voltar para eventos
    </button>
  </div>
);
};

export default EventConsumptionPage;