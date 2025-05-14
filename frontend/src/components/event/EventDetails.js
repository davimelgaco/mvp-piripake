import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Typography,
  Box,
  Button,
  Chip,
  Grid,
  Divider
} from "@mui/material";
import { 
  CalendarMonth, 
  Info, 
  ArrowBack, 
  LocalDining 
} from "@mui/icons-material";

// ❌ Removido: interface EventProps e tipo do componente

const EventDetails = ({ event }) => {
  if (!event) {
    return (
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
        <Typography variant="h6" color="error">Evento não encontrado.</Typography>
        <Button 
          component={Link} 
          to="/events" 
          variant="contained" 
          sx={{ mt: 2, backgroundColor: '#353b93' }}
        >
          Voltar para eventos
        </Button>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Info sx={{ color: '#353b93', mr: 1 }} />
        <Typography variant="h5" component="h2" sx={{ color: '#353b93', fontWeight: 'bold' }}>
          {event.name}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />
      
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarMonth sx={{ color: '#777', mr: 1 }} />
            <Typography variant="body1" color="text.secondary">
              <strong>Data:</strong> {event.date}
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          {event.status && (
            <Chip 
              label={event.status === 'open' ? 'Aberto' : 'Fechado'}
              color={event.status === 'open' ? 'success' : 'default'}
              variant="outlined"
              size="small"
            />
          )}
        </Grid>
        
        {event.description && (
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Descrição:</strong> {event.description}
            </Typography>
          </Grid>
        )}
      </Grid>

      <Divider sx={{ my: 2 }} />
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button 
            component={Link} 
            to="/events"
            fullWidth
            variant="outlined" 
            startIcon={<ArrowBack />}
            sx={{ 
              borderColor: '#353b93',
              color: '#353b93',
            }}
          >
            Voltar para eventos
          </Button>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Button
            component={Link}
            to={`/event/${event.id}/consumption`}
            fullWidth
            variant="contained"
            startIcon={<LocalDining />}
            sx={{ 
              backgroundColor: '#353b93',
              '&:hover': {
                backgroundColor: '#2a2f74'
              }
            }}
          >
            Inserir Consumações
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EventDetails;
