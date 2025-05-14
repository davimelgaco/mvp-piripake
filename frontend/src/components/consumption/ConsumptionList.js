import React, { useEffect, useState } from 'react';
import consumptionService from '../../services/consumptionService';
import AssignParticipantsToConsumption from './AssignParticipantsToConsumption';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Divider,
  IconButton,
  Box
} from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CloseIcon from '@mui/icons-material/Close';

const ConsumptionList = ({ eventId, reload }) => {
  const [consumptions, setConsumptions] = useState([]);
  const [selectedConsumptionId, setSelectedConsumptionId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!eventId) {
        console.warn('eventId está indefinido ou inválido:', eventId);
        return;
      }

      try {
        const response = await consumptionService.getByEventId(eventId);
        console.log('Resposta da API:', response);

        if (!Array.isArray(response.data)) {
          console.warn('Resposta não é um array:', response.data);
          setConsumptions([]);
          return;
        }

        setConsumptions(response.data);
      } catch (error) {
        console.error('Erro ao buscar consumptions:', error);
      }
    };

    fetchData();
  }, [eventId, reload]);

  if (!consumptions.length) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Nenhum consumo registrado.
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {consumptions.map((item) => (
        <Card key={item.id} elevation={2}>
          <CardHeader
            title={
              <Typography variant="subtitle1" fontWeight="bold" color="primary">
                {item.productName}
              </Typography>
            }
            subheader={
              <Typography variant="body2" color="text.secondary">
                {item.quantityTotal} × R${item.priceUnit.toFixed(2)} = R$
                {(item.quantityTotal * item.priceUnit).toFixed(2)}
              </Typography>
            }
            action={
              <IconButton
                onClick={() =>
                  setSelectedConsumptionId(
                    selectedConsumptionId === item.id ? null : item.id
                  )
                }
                color="primary"
              >
                {selectedConsumptionId === item.id ? <CloseIcon /> : <GroupAddIcon />}
              </IconButton>
            }
          />
          <Divider />
          {selectedConsumptionId === item.id && (
            <CardContent>
              <AssignParticipantsToConsumption
                consumptionId={item.id}
                eventId={eventId}
              />
            </CardContent>
          )}
        </Card>
      ))}
    </Box>
  );
};

export default ConsumptionList;
