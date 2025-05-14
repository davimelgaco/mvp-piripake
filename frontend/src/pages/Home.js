import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  AppBar, 
  Toolbar, 
  Paper,
  Grid
} from '@mui/material';
import { Add, ListAlt, People, ArrowForward } from '@mui/icons-material';

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header/AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#353b93' }}>
        <Toolbar>
          {/* Logo placeholder - 150x50px dimension */}
          <Box 
            sx={{ 
              width: 150, 
              height: 50, 
              backgroundColor: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 1,
              marginRight: 2
            }}
          >
            <Typography variant="h6" sx={{ color: '#353b93', fontWeight: 'bold' }}>
              LOGO
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" component={Link} to="/about">Sobre</Button>
          <Button color="inherit" component={Link} to="/help">Ajuda</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#353b93', fontWeight: 'bold' }}>
          Piripake do Chavs
        </Typography>
        
        <Typography variant="h5" sx={{ mb: 6, color: 'text.secondary' }}>
          Bem-vindo ao sistema de divisão de contas!
        </Typography>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Button
                component={Link}
                to="/event/create"
                variant="contained"
                size="large"
                fullWidth
                startIcon={<Add />}
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: '#353b93',
                  py: 2,
                  '&:hover': {
                    backgroundColor: '#2a2f74'
                  }
                }}
              >
                Iniciar Piripake
              </Button>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Button
                component={Link}
                to="/events"
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<ListAlt />}
                sx={{
                  borderColor: '#353b93',
                  color: '#353b93',
                  py: 2,
                  '&:hover': {
                    borderColor: '#2a2f74',
                    backgroundColor: 'rgba(53, 59, 147, 0.04)'
                  }
                }}
              >
                Ver Eventos
              </Button>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Button
                component={Link}
                to="/participants"
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<People />}
                sx={{
                  borderColor: '#353b93',
                  color: '#353b93',
                  py: 2,
                  '&:hover': {
                    borderColor: '#2a2f74',
                    backgroundColor: 'rgba(53, 59, 147, 0.04)'
                  }
                }}
              >
                Ver Participantes
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Footer */}
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

export default HomePage;