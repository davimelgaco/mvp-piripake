import  axios from "axios";

// Crie uma instância do Axios (opcional, para reutilizar a URL base)

const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1', // URL do seu backend
})

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