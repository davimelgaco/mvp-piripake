import React, { useState } from 'react';
import { getCalculation } from '../../services/calculateService';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Box, CircularProgress } from '@mui/material';

const EventConsumptionSummary = ({ eventId }) => {
  const [summary, setSummary] = useState(null); // Armazenará os dados de cálculo
  const [isOpen, setIsOpen] = useState(false);  // Controle do estado do modal
  const [loading, setLoading] = useState(false); // Controle de carregamento

  // Função para realizar a requisição e obter a prévia do cálculo
  const handlePreview = async () => {
    setLoading(true); // Inicia o carregamento
    try {
      const result = await getCalculation(eventId); // Faz a requisição para a API
      setSummary(result); // Armazena a resposta no estado
      setIsOpen(true); // Abre o modal
    } catch (error) {
      console.error("Erro ao buscar a prévia da divisão:", error);
      setSummary(null); // Em caso de erro, limpa os dados de resumo
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Função para fechar o modal
  const closeModal = () => setIsOpen(false);

  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* Botão de prévia da divisão */}
      <Button
        variant="contained"
        onClick={handlePreview}
        disabled={loading}
        sx={{
          backgroundColor: '#353b93',
          '&:hover': {
            backgroundColor: '#2a2f74',
          },
          marginBottom: 2
        }}
      >
        {loading ? 'Carregando...' : 'Prévia da Divisão'}
      </Button>


      {/* Modal para exibir a prévia do cálculo */}
      <Dialog open={isOpen} onClose={closeModal} maxWidth="md" fullWidth>
        <DialogTitle>Prévia da Divisão</DialogTitle>
        <DialogContent>
          {loading ? (
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress />
              <Typography variant="body2" sx={{ marginTop: 2 }}>Carregando dados...</Typography>
            </Box>
          ) : summary ? (
            <Box sx={{ padding: 2 }}>
              {Object.entries(summary).map(([participantId, participantData]) => (
                <Box key={participantId} sx={{ marginBottom: 2, borderBottom: '1px solid #ccc', paddingBottom: 2 }}>
                  <Typography variant="h6">{participantData.participantName}</Typography>
                  <Typography variant="body1">Total: R${participantData.totalAmount.toFixed(2)}</Typography>
                  <ul>
                    {participantData.details.map((detail, i) => (
                      <li key={i}>
                        {detail.product} – {detail.units} x R${(detail.amount / detail.units).toFixed(2)} = R${detail.amount.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Nenhuma prévia de divisão disponível. Clique no botão para carregar os dados.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EventConsumptionSummary;
