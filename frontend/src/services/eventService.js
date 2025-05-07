import api from '../api'; // api.js já deve estar configurado com baseURL




export const getAllEvents = async () => {
    try {
        const response = await api.get('/event');
        console.log('Resposta da API:', response.data); // Verifique o que é retornado da API


        // Garantir que a resposta seja um array, mesmo que vazio
        return Array.isArray(response.data.events) ? response.data.events : [];   // retorna os dados dos eventos
    } catch (e) {
        console.error("Erro ao buscar eventos", e);
    }
}

export const getEventById = async (id) => {
    try {
        const response = await api.get(`/event/${id}`);
        console.log('Resposta da API:', response.data); // Verifique o que é retornado da API


        // Garantir que a resposta seja um array, mesmo que vazio
        return response.data.event || null   // retorna os dados dos eventos
    } catch (e) {
        console.error("Erro ao buscar o evento", e);
    }
}

export const createEvent = async (eventData) => {
    try {
        const response = await api.post('/event', eventData);
        console.log('Resposta da API:', response.data); // Verifique o que é retornado da API


        return response.data;   // retorna os dados dos eventos
    } catch (e) {
        console.error("Erro ao criar o evento", e);
    }
}

export const updateEvent = async () => {
    try {
        const response = await api.get('/event');
        console.log('Resposta da API:', response.data); // Verifique o que é retornado da API


        // Garantir que a resposta seja um array, mesmo que vazio
        return Array.isArray(response.data.events) ? response.data.events : [];   // retorna os dados dos eventos
    } catch (e) {
        console.error("Erro ao buscar eventos", e);
    }
}

export const deleteEvent = async () => {
    try {
        const response = await api.get('/event');
        console.log('Resposta da API:', response.data); // Verifique o que é retornado da API


        // Garantir que a resposta seja um array, mesmo que vazio
        return Array.isArray(response.data.events) ? response.data.events : [];   // retorna os dados dos eventos
    } catch (e) {
        console.error("Erro ao buscar eventos", e);
    }
}
