import React, { useEffect, useState } from 'react';
import consumptionParticipantService from '../../services/consumptionParticipantService';
import { getEventById } from '../../services/eventService';
import { toast } from 'react-toastify';


const AssignParticipantsToConsumption = ({ consumptionId, eventId }) => {
  const [participants, setParticipants] = useState([]);
  const [units, setUnits] = useState({});

  useEffect(() => {
    const loadParticipants = async () => {
      const event = await getEventById(eventId);
      setParticipants(event.participants || []);
    };
    loadParticipants();
  }, [eventId]);

  const handleChange = (participantId, value) => {
    setUnits({ ...units, [participantId]: Number(value) });
  };

  const handleSubmit = async () => {
    const payload = Object.entries(units).map(([participantId, unitsConsumed]) => ({
      participantId,
      consumptionId,
      unitsConsumed,
    }));
    try {
      await consumptionParticipantService.assignParticipants(payload);
      toast.success('Participantes atribuídos com sucesso!');
    } catch (err) {
      toast.error('Erro ao salvar atribuições.');
    }
  };

  return (
    <div className="mt-2 space-y-2">
      {participants.map((p) => (
        <div key={p.id} className="flex items-center gap-2">
          <span>{p.name}</span>
          <input
            type="number"
            min="0"
            value={units[p.id] || ''}
            onChange={(e) => handleChange(p.id, e.target.value)}
            className="input w-24"
          />
        </div>
      ))}
      <button onClick={handleSubmit} className="btn btn-sm btn-success mt-2">
        Salvar atribuições
      </button>
    </div>
  );
};

export default AssignParticipantsToConsumption;
