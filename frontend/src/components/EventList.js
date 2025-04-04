import React, { useEffect, useState } from "react";
import { getAllEvents } from "../services/eventService";

const Events = () => {
    const [events, setEvents] = useState([]);

    //Carrega os eventos ao montar o componente
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getAllEvents()
                setEvents(data) // Atualiza o estado com os eventos
            } catch (e) {
                console.error('Erro ao carregar eventos:', e);
            }
        };
        fetchEvents();
    }, []); //o array vazio faz a chamada apenas uma vez, ao montar o componente

    // Condição para garantir que `events` é um array
  if (!Array.isArray(events)) {
    return <p>Carregando...</p>; // Exibe uma mensagem ou um carregamento se `events` não for um array
  }

return (
    <div>
    <h1>Eventos</h1>
    <ul>
        {events.map((event) => (
            <li key={event.id}>{event.name} { event.date} </li>
        ))}
    </ul>
    </div>
);
};

export default Events;