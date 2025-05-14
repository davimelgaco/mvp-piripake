import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllEvents, getEventById } from "../services/eventService";
import { Box, Container, CircularProgress, Typography } from "@mui/material";

import EventList from "../components/event/EventList";
import EventDetails from "../components/event/EventDetails";

const EventPage = () => {
  const { id } = useParams(); // ID do evento (se existir na URL)
  const [events, setEvents] = useState([]); // Lista de eventos (modo lista)
  const [event, setEvent] = useState(null); // Evento individual (modo detalhes)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError("");

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
        setError("Falha ao carregar dados. Por favor, tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress sx={{ color: '#353b93' }} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Container>
    );
  }

  // Modo Lista
  if (!id) {
    return <EventList events={events} />;
  }

  // Modo Detalhes
  return (
    <Box>
      <EventDetails event={event} />
      {/* Exemplo de onde adicionar futuramente: <ParticipantList eventId={id} /> */}
    </Box>
  );
};

export default EventPage;
