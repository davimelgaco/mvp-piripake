import { useState } from "react";
import { createParticipant } from "../../services/participantService";

const ParticipantForm = ({ participants, setParticipants }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newParticipant = { name };

      // Chama o service para criar o participante
      const created = await createParticipant(newParticipant);

     // Recarrega a página após criar
     window.location.reload();
      // Limpa o input
      setName("");
    } catch (err) {
      console.error("Erro ao criar Participante", err);
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
      <button type="submit">Cadastrar Participante</button>
    </form>
  );
};

export default ParticipantForm;
