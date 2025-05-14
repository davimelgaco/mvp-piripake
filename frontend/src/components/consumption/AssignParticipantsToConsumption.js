import React, { useEffect, useState } from 'react';
import { assignParticipants } from '../../services/consumptionParticipantService';
import { getAllParticipants } from '../../services/participantService';
import { toast } from 'react-toastify';
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Paper,
  Grid
} from '@mui/material';

const AssignParticipantsToConsumption = ({ consumptionId, eventId }) => {
  const [participants, setParticipants] = useState([]);
  const [units, setUnits] = useState({});

  useEffect(() => {
    const loadParticipants = async () => {
      try {
        const response = await getAllParticipants();
        const allParticipants = response || [];

        if (!allParticipants.length) {
          console.log('Nenhum participante encontrado na resposta', allParticipants);
        }

        // Suponha que todos participantes retornados são do evento, ou filtre aqui se necessário
        setParticipants(allParticipants);
      } catch (error) {
        console.error("Erro ao carregar participantes:", error);
      }
    };

    loadParticipants();
  }, [eventId]);

  const handleChange = (participantId, value) => {
    setUnits({ ...units, [participantId]: Number(value) });
  };

  const handleSubmit = async () => {
    try {
      for (const [participantId, unitsConsumed] of Object.entries(units)) {
        if (unitsConsumed <= 0) continue;

        const payload = {
          consumptionId,
          participantId: Number(participantId),
          unitsConsumed
        };

        console.log("Enviando payload:", payload);
        await assignParticipants(payload);
      }

      toast.success('Participantes atribuídos com sucesso!');
    } catch (err) {
      console.error("Erro ao atribuir participante:", err.response?.data || err.message);
      toast.error('Erro ao salvar atribuições.');
    }
  };

  return (
    <Paper elevation={2} sx={{ mt: 3, p: 2, backgroundColor: '#f9f9f9' }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#353b93', mb: 2 }}>
        Atribuir unidades consumidas
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={2}>
        {participants.map((p) => (
          <Grid item xs={12} sm={6} key={p.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" sx={{ flexGrow: 1 }}>
                {p.name}
              </Typography>
              <TextField
                type="number"
                label="Unidades"
                size="small"
                inputProps={{ min: 0 }}
                value={units[p.id] || ''}
                onChange={(e) => handleChange(p.id, e.target.value)}
                sx={{ width: 100 }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: '#353b93',
            '&:hover': { backgroundColor: '#2a2f74' }
          }}
        >
          Salvar Atribuições
        </Button>
      </Box>
    </Paper>
  );
};

export default AssignParticipantsToConsumption;
