import React, { useEffect, useState } from 'react';
import consumptionService from '../../services/consumptionService';
import AssignParticipantsToConsumption from './AssignParticipantsToConsumption';

const ConsumptionList = ({ eventId, reload }) => {
  const [consumptions, setConsumptions] = useState([]);
  const [selectedConsumptionId, setSelectedConsumptionId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await consumptionService.getByEventId(eventId);
      setConsumptions(data);
    };
    fetchData();
  }, [eventId, reload]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Lista de Consumos</h2>
      {consumptions.map((item) => (
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
