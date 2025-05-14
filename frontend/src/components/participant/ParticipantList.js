import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Divider,
  Button,
  Box
} from "@mui/material";
import { Person, Home } from "@mui/icons-material";

const ParticipantList = ({ participants }) => {
  if (!Array.isArray(participants)) {
    return (
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
        <Typography variant="subtitle1">Carregando participantes...</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography 
        variant="h5" 
        component="h2" 
        gutterBottom 
        sx={{ color: '#353b93', display: 'flex', alignItems: 'center' }}
      >
        <Person sx={{ mr: 1, color: '#353b93' }} />
        Lista de Participantes
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      {participants.length === 0 ? (
        <Typography variant="body1">Nenhum participante encontrado.</Typography>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {participants.map((participant) => (
            <React.Fragment key={participant.id}>
              <ListItem>
                <ListItemText 
                  primary={participant.name} 
                  primaryTypographyProps={{ fontWeight: 'medium', color: '#353b93' }}
                />
              </ListItem>
              <Divider component="li" />
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

export default ParticipantList;
