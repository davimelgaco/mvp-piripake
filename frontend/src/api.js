import axios from "axios";


  // Crie uma instância do Axios (opcional, para reutilizar a URL base)
  const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1/', // URL do seu backend
})

export default api;