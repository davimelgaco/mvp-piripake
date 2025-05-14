import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Paper,
  Grid,
  FormHelperText
} from "@mui/material";
import { SaveAlt, ArrowBack } from "@mui/icons-material";
import { createEvent } from "../../services/eventService"; // Importa a função para criar evento no backend

const EventForm = () => {
  // Estados para armazenar os valores do formulário
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("open");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Cria o objeto com os dados do novo evento
      const newEvent = {
        name,
        date,
        status,
      };

      // Chama o service para criar o evento
      const createdEvent = await createEvent(newEvent);

      if (createdEvent && createdEvent.event && createdEvent.event.id) {
        // Redireciona para a página do evento criado
        navigate(`/event/${createdEvent.event.id}`);
      } else {
        setError("ID do evento não encontrado na resposta.");
      }
    } catch (err) {
      console.error("Erro ao criar evento", err);
      setError("Erro ao criar evento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#353b93' }}>
        Criar Novo Evento
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome do Evento"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="date"
              label="Data do Evento"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                labelId="status-select-label"
                id="status-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Status"
                required
              >
                <MenuItem value="open">Aberto</MenuItem>
                <MenuItem value="closed">Fechado</MenuItem>
              </Select>
              <FormHelperText>Selecione o status do evento</FormHelperText>
            </FormControl>
          </Grid>
          
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          
          <Grid item xs={12} sm={6}>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => navigate(-1)}
              startIcon={<ArrowBack />}
              sx={{
                borderColor: '#353b93',
                color: '#353b93',
              }}
            >
              Voltar
            </Button>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              startIcon={<SaveAlt />}
              sx={{
                backgroundColor: '#353b93',
                '&:hover': {
                  backgroundColor: '#2a2f74'
                }
              }}
            >
              {loading ? "Criando..." : "Criar Evento"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default EventForm;