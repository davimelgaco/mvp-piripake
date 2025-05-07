import api from '../api'; // api.js já deve estar configurado com baseURL


export const createParticipant = async (name ) => {
    try {
        const response = await api.post('participant', name);

        return response.name; //Retorna o nome do Participante Criado
    } catch(e) {
        console.error("Erro ao criar o Participante", e);
    }
}

export const getAllParticipants = async () => {
    try {
        const response = await api.get('/participant');

        // Garantir que a resposta seja um array, mesmo que vazio
        return Array.isArray(response.data.participants) ? response.data.participants : [] // retorna os dados dos eventos
    }catch (e) {
        console.error("Erro ao buscar participantes", e);
    }
}