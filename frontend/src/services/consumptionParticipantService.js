import api from './api';

const assignParticipants = (list) => api.post('/consumption-participants/bulk', list);

export default { assignParticipants };
