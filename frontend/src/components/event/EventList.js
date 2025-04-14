import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  if (!Array.isArray(events)) {
    return <p>Carregando eventos...</p>;
  }

  return (
    <div>
      <h2>Lista de Eventos</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>
              {event.name} - {event.date}
            </Link>
           
          </li>
        ))}
      </ul>
      <Link to="/">
              <button type="button">Voltar para home</button>
            </Link>
    </div>
  );
};

export default EventList;