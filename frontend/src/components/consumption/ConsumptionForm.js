import { useState } from 'react';
import { toast } from 'react-toastify';
import consumptionService from '../../services/consumptionService';
import {
  TextField,
  Button,
  Typography,
  Box,
  Divider,
  Paper
} from '@mui/material';

const ConsumptionForm = ({ eventId, onSuccess }) => {
  const [productName, setProductName] = useState('');
  const [quantityTotal, setQuantityTotal] = useState('');
  const [priceUnit, setPriceUnit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventId) {
      toast.error('ID do evento não especificado');
      return;
    }

    try {
      await consumptionService.create(eventId, {
        productName,
        quantityTotal: Number(quantityTotal),
        priceUnit: Number(priceUnit),
      });

      toast.success('Consumo adicionado!');
      setProductName('');
      setQuantityTotal('');
      setPriceUnit('');
      onSuccess(); // recarrega a lista
    } catch (err) {
      console.error('Erro ao adicionar consumo:', err);
      toast.error('Erro ao adicionar consumo.');
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ color: '#353b93', fontWeight: 'bold', mb: 2 }}>
        Adicionar Consumo
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          label="Produto"
          variant="outlined"
          fullWidth
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          sx={{ mb: 2 }}
        />

        <TextField
          label="Quantidade total"
          variant="outlined"
          type="number"
          fullWidth
          value={quantityTotal}
          onChange={(e) => setQuantityTotal(e.target.value)}
          required
          sx={{ mb: 2 }}
        />

        <TextField
          label="Preço unitário (R$)"
          variant="outlined"
          type="number"
          inputProps={{ step: '0.01', min: '0' }}
          fullWidth
          value={priceUnit}
          onChange={(e) => setPriceUnit(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#353b93',
            '&:hover': {
              backgroundColor: '#2a2f74',
            },
            py: 1.3,
            fontWeight: 'bold',
          }}
        >
          Adicionar
        </Button>
      </Box>
    </Paper>
  );
};

export default ConsumptionForm;
