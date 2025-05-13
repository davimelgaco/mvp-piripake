import React, { useEffect, useState } from 'react';
import { assignParticipants } from '../../services/consumptionParticipantService';
import { getAllParticipants } from '../../services/participantService'; // Supondo que esta função retorne todos os participantes
import { toast } from 'react-toastify';

const AssignParticipantsToConsumption = ({ consumptionId, eventId }) => {
  const [participants, setParticipants] = useState([]);
  const [units, setUnits] = useState({});

  useEffect(() => {
    const loadParticipants = async () => {
      try {
        const response = await getAllParticipants(); // Busca todos os participantes
                console.log('Resposta da API2:', response); // Verifique o que está sendo retornado

 const allParticipants = response || []; // Supondo que os participantes estejam em response.data
        if (!allParticipants.length) {
          console.log('Nenhum participante encontrado na resposta', allParticipants);
        }
        // Filtra os participantes do evento atual
        const eventParticipants = allParticipants
        setParticipants(eventParticipants);
      } catch (error) {
        console.error("Erro ao carregar participantes:", error);
      }
    };

    loadParticipants();
  }, [eventId]);

  const handleChange = (participantId, value) => {
    setUnits({ ...units, [participantId]: Number(value) });
  };

 
  const handleSubmit = async () => {
    try {
      for (const [participantId, unitsConsumed] of Object.entries(units)) {
        const payload = {
          consumptionId,
          participantId: Number(participantId), // 🔧 converter para número
          unitsConsumed
        };
  
        console.log("Enviando payload:", payload);
  
        await assignParticipants(payload);
      }
  
      toast.success('Participantes atribuídos com sucesso!');
    } catch (err) {
      console.error("Erro ao atribuir participante:", err.response?.data || err.message);
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
