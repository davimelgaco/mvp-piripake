import React, { useEffect, useState } from 'react';
import consumptionService from '../../services/consumptionService';
import AssignParticipantsToConsumption from './AssignParticipantsToConsumption';

const ConsumptionList = ({ eventId, reload }) => {
  const [consumptions, setConsumptions] = useState([]);
  const [selectedConsumptionId, setSelectedConsumptionId] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    if (!eventId) {
      console.warn('eventId está indefinido ou inválido:', eventId);
      return;
    }

    try {
      const response = await consumptionService.getByEventId(eventId);
      console.log('Resposta da API:', response);

      if (!Array.isArray(response.data)) {
        console.warn('Resposta não é um array:', response.data);
        setConsumptions([]);
        return;
      }

      setConsumptions(response.data);
    } catch (error) {
      console.error('Erro ao buscar consumptions:', error);
    }
  };

  fetchData();
}, [eventId, reload]);


  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Lista de Consumos</h2>
      {Object.values(consumptions).map((item) => (
        <div key={item.id} className="border p-2 mb-2 rounded">
          <div className="flex justify-between items-center">
            <div>
              <strong>{item.productName}</strong> – {item.quantityTotal} x R${item.priceUnit}
            </div>
            <button
              onClick={() => setSelectedConsumptionId(selectedConsumptionId === item.id ? null : item.id)}
              className="text-sm text-blue-600"
            >
              {selectedConsumptionId === item.id ? 'Fechar' : 'Atribuir participantes'}
            </button>
          </div>
          {selectedConsumptionId === item.id && (
            <AssignParticipantsToConsumption consumptionId={item.id} eventId={eventId} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ConsumptionList;
