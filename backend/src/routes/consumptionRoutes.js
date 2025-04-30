import express from "express";
import ConsumptionController from "../controllers/consumptionController.js";

const consumptionRouter = express.Router();

consumptionRouter.post('/:eventId/consumptions', ConsumptionController.Create);
consumptionRouter.get('/:eventId/consumptions', ConsumptionController.FindAll);
consumptionRouter.get('/:eventId/consumptions/:id', ConsumptionController.FindById);

// Rota para calcular o consumo por evento
consumptionRouter.get('/:eventId/calculate', ConsumptionController.CalculateConsumptionPerEvent);

export default consumptionRouter;
