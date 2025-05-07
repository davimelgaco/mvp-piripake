import api from '../api'; // api.js já deve estar configurado com baseURL

export const getCalculation = async (eventId) => {
  const response = await api.get(`/events/${eventId}/calculate`);
  return response.data;
};
