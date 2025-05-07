import { useEffect, useState } from "react";
import { getAllParticipants } from "../services/participantService";

import ParticipantList from "../components/participant/ParticipantList";
import ParticipantForm from "../components/participant/ParticipantForm";

const ParticipantPage = () => {
  const [participants, setParticipants] = useState([]);
  const [participant, setParticipant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await getAllParticipants();
        setParticipants(data);
      } catch (e) {
        console.error("Erro ao carregar participantes:", e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Participantes</h2>
      <ParticipantForm participant={participant} />
      <ParticipantList participants={participants} />
    </div>
  );
};

export default ParticipantPage;
