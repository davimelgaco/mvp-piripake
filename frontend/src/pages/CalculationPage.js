import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCalculation } from "../services/calculateService";
import { Box, Typography, Button, CircularProgress, Paper } from "@mui/material";

const CalculationPage = () => {
  const { id } = useParams(); // pega o ID do evento da URL
  const [calculation, setCalculation] = useState(null); // guarda os dados da API
  const [loading, setLoading] = useState(true); // controla o carregamento

  useEffect(() => {
    const fetchCalculation = async () => {
      try {
        const data = await getCalculation(id); // faz a requisição para API
        setCalculation(data); // armazena a resposta no estado
      } catch (error) {
        console.error("Erro ao buscar Cálculo", error); // loga qualquer erro
      } finally {
        setLoading(false); // marca o carregamento como concluído
      }
    };

    fetchCalculation();
  }, [id]); // dispara o useEffect quando o id mudar

  // Enquanto carrega
  if (loading) return <CircularProgress />;

  // Se não houver dados
  if (!calculation) return <Typography>Erro ao buscar cálculo.</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Divisão Detalhada
      </Typography>

      <Paper sx={{ padding: 3 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Detalhamento por Participante:
        </Typography>
        <ul>
          {/* Object.entries transforma o objeto em um array de [chave, valor] */}
          {Object.entries(calculation).map(([participantId, participantData]) => (
            <li key={participantId} style={{ marginBottom: 10 }}>
              <Typography variant="h6">
                <strong>{participantData.participantName}</strong>
              </Typography>
              <Typography variant="body1">
                Total: R${participantData.totalAmount.toFixed(2)}
              </Typography>
              <ul>
                {/* Detalhes do consumo por produto */}
                {participantData.details.map((detail, i) => (
                  <li key={i}>
                    {detail.product} – {detail.units} x R${(detail.amount / detail.units).toFixed(2)} = R${detail.amount.toFixed(2)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Paper>

      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: '#353b93',
          '&:hover': {
            backgroundColor: '#2a2f74',
          },
          marginTop: 2
        }}
        href={`/events`} // exemplo de navegação para lista de eventos
      >
        Voltar para Eventos
      </Button>
    </Box>
  );
};

export default CalculationPage;
