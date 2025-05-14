import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Box, AppBar, Toolbar, Button } from "@mui/material";
import { getAllParticipants } from "../services/participantService";
import ParticipantList from "../components/participant/ParticipantList";
import ParticipantForm from "../components/participant/ParticipantForm";
import { Link } from "react-router-dom";
//import Logo from "../components/Logo";

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

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress sx={{ color: '#353b93' }} />
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#353b93' }}>
        <Toolbar>
        {/*  <Logo /> */}
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" component={Link} to="/">Voltar para Home</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ color: '#353b93', fontWeight: 'bold', textAlign: 'center', my: 4 }}
        >
          Gerenciamento de Participantes
        </Typography>
        
        <ParticipantForm participant={participant} />
        <ParticipantList participants={participants} />
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          mt: 'auto',
          backgroundColor: '#f5f5f5',
          textAlign: 'center'
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2025 Piripake do Chavs. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default ParticipantPage;
