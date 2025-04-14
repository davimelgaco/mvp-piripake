import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllEvents, getEventById } from "../services/eventService";

import EventList from "../components/event/EventList";
import EventDetails from "../components/event/EventDetails";
//import ParticipantList from "../components/participants/ParticipantList";

const EventPage = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        if (id) {
          const data = await getEventById(id);
          setEvent(data);
        } else {
          const data = await getAllEvents();
          setEvents(data);
        }
      } catch (e) {
        console.error("Erro ao carregar eventos:", e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <p>Carregando...</p>;

  if (!id) {
    // Modo lista
    return <EventList events={events} />;
  }

  // Modo detalhes
  return (
    <>
      <EventDetails event={event} />
   {/*   <ParticipantList eventId={id} /> */}
    </>
  );
};

export default EventPage;
