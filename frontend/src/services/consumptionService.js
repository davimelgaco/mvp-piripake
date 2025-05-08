import api from './api';

const create = (data) => api.post('/consumptions', data);
const getByEventId = (eventId) => api.get(`/events/${eventId}/consumptions`);

export default { create, getByEventId };
