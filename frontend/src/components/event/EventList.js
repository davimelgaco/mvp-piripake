import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Paper,
  Typography,
  Divider,
  Button,
  Box
} from "@mui/material";
import { Event, Home } from "@mui/icons-material";

// ❌ Removidas interfaces TypeScript

const EventList = ({ events }) => {
  if (!Array.isArray(events)) {
    return (
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
        <Typography variant="subtitle1">Carregando eventos...</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#353b93', display: 'flex', alignItems: 'center' }}>
        <Event sx={{ mr: 1, color: '#353b93' }} />
        Lista de Eventos
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      {events.length === 0 ? (
        <Typography variant="body1">Nenhum evento encontrado.</Typography>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {events.map((event) => (
            <React.Fragment key={event.id}>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={`/event/${event.id}`}>
                  <ListItemText 
                    primary={event.name} 
                    secondary={`Data: ${event.date}`}
                    primaryTypographyProps={{ fontWeight: 'medium', color: '#353b93' }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider variant="fullWidth" component="li" />
            </React.Fragment>
          ))}
        </List>
      )}
      
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          startIcon={<Home />}
          sx={{
            backgroundColor: '#353b93',
            '&:hover': {
              backgroundColor: '#2a2f74'
            }
          }}
        >
          Voltar para home
        </Button>
      </Box>
    </Paper>
  );
};

export default EventList;
