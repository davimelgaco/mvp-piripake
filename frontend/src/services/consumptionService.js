import api from '../api';

const create = (eventId, data) => api.post(`/events/${eventId}/consumptions`, data);
const getByEventId = (eventId) => api.get(`/events/${eventId}/consumptions`);

export default { create, getByEventId };
