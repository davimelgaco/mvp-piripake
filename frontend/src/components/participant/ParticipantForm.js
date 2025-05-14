import React, { useState } from "react";
import { 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Divider
} from "@mui/material";
import { Add, Person } from "@mui/icons-material";
import { createParticipant } from "../../services/participantService";

const ParticipantForm = ({ participant }) => {
  const [name, setName] = useState(participant?.name || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newParticipant = { name };

      // Chama o service para criar o participante
      await createParticipant(newParticipant);

      // Recarrega a página após criar
      window.location.reload();
      
      // Limpa o input
      setName("");
    } catch (err) {
      console.error("Erro ao criar Participante", err);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 600, mx: "auto", mb: 4 }}>
      <Typography 
        variant="h5" 
        component="h2" 
        gutterBottom 
        sx={{ color: '#353b93', display: 'flex', alignItems: 'center' }}
      >
        <Person sx={{ mr: 1, color: '#353b93' }} />
        Cadastrar Participante
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Nome do Participante"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ mb: 3 }}
        />
        
        <Button
          type="submit"
          variant="contained"
          startIcon={<Add />}
          fullWidth
          sx={{
            backgroundColor: '#353b93',
            py: 1.5,
            '&:hover': {
              backgroundColor: '#2a2f74'
            }
          }}
        >
          Cadastrar Participante
        </Button>
      </Box>
    </Paper>
  );
};

export default ParticipantForm;
