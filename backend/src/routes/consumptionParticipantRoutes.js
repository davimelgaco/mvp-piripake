import express from "express";
import ConsumptionParticipantController from "../controllers/consumptionParticipantController.js";

const consumptionParticipantRouter = express.Router();

// Rota para buscar um participante de consumo específico dentro de um evento
consumptionParticipantRouter.get('/:id', ConsumptionParticipantController.FindById);

// Rota para criar um novo participante de consumo dentro de um evento
consumptionParticipantRouter.post('/', ConsumptionParticipantController.Create);

export default consumptionParticipantRouter;
