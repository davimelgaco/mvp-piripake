import React from "react";
import { Link } from "react-router-dom";

const ParticipantList = ({ participants }) => {
  if (!Array.isArray(participants)) {
    return <p>Carregando participantes...</p>;
  }

  return (
    <div>
      <h2>Lista de Participantes</h2>
      <ul>
        {participants.map((participants) => (
          <li key={participants.id}>
           
              {participants.name}
            
           
          </li>
        ))}
      </ul>
      <Link to="/">
              <button type="button">Voltar para home</button>
            </Link>
    </div>
  );
};

export default ParticipantList;