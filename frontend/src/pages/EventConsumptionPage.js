import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ConsumptionForm from '../components/consumption/ConsumptionForm';
import ConsumptionList from '../components/consumption/ConsumptionList';
import EventConsumptionSummary from '../components/summary/EventConsumptionSummary';

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  AppBar,
  Toolbar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalculateIcon from '@mui/icons-material/Calculate';

const EventConsumptionPage = () => {
  const { id: eventId } = useParams();
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);

  const handleReload = () => setReload(!reload);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header com AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#353b93' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Piripake do Chavs
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          gutterBottom
          textAlign="center"
        >
          Conta do Evento #{eventId}
        </Typography>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <ConsumptionForm eventId={eventId} onSuccess={handleReload} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <ConsumptionList eventId={eventId} reload={reload} />
            </Paper>
          </Grid>
        </Grid>

        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <EventConsumptionSummary eventId={eventId} />
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            onClick={() => navigate('/events')}
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            sx={{
              borderColor: '#353b93',
              color: '#353b93',
              '&:hover': {
                borderColor: '#2a2f74',
                backgroundColor: 'rgba(53, 59, 147, 0.04)',
              },
            }}
          >
            Voltar para eventos
          </Button>

          <Button
            onClick={() => navigate(`/event/${eventId}/calculate`)}
            endIcon={<CalculateIcon />}
            variant="contained"
            sx={{
              backgroundColor: '#353b93',
              '&:hover': {
                backgroundColor: '#2a2f74',
              },
            }}
          >
            Cálculo Final
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EventConsumptionPage;
