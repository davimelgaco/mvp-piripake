// services/consumptionParticipantService.js
import api from '../api';

// Atribui participantes a uma consumação específica
export const assignParticipants = async (list) => {
  try {
    const response = await api.post('/events/consumption-participants', list);
    return response.data;
  } catch (error) {
    console.error('Erro ao atribuir participantes à consumação:', error);
    
    throw error;
  }
};
