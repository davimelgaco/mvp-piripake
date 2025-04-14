import React from "react";
import { Link } from "react-router-dom";


// EventDetails.jsx
const EventDetails = ({ event }) => {
    if (!event) return <p>Evento não encontrado.</p>;
  
    return (
      <div>
        <h2>{event.name}</h2>
        <p>Data: {event.date}</p>
        <p>Descrição: {event.description}</p>
        {/* Outros campos que quiser mostrar */}
        <Link to="/events">
        <button type="button">Voltar para eventos</button>
      </Link>

      </div>
    );
  };
  
  export default EventDetails;
  