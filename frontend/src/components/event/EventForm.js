import { useState } from "react";
import { createEvent } from "../../services/eventService"; // Importa a função para criar evento no backend
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  // Estados para armazenar os valores do formulário
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("open"); // 🆕 Novo campo para status

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Cria o objeto com os dados do novo evento
      const newEvent = {
        name,
        date,
        status, // 🆕 Envia o status junto
      };

      // Chama o service para criar o evento
      const createdEvent = await createEvent(newEvent); // <- Aqui pega os dados retornados, incluindo o ID

      if (createdEvent && createdEvent.event && createdEvent.event.id) {
        // Redireciona para a página do evento criado
        navigate(`/event/${createdEvent.event.id}`);
        console.log(createdEvent.event.id);
      } else {
        console.error("ID do evento não encontrado na resposta.");
        
      }
    } catch (err) {
      console.error("Erro ao criar evento", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Data:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* 🆕 Campo de seleção para o status do evento */}
      <label>Status:</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="open">Aberto</option>
        <option value="closed">Fechado</option>
      </select>

      <button type="submit">Criar Evento</button>
    </form>
  );
};

export default EventForm;
