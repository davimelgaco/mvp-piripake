import express from "express";
import ConsumptionController from "../controllers/consumptionController.js";

const consumptionRouter = express.Router();

consumptionRouter.post('/:eventId/consumptions', ConsumptionController.Create);
consumptionRouter.get('/:eventId/consumptions', ConsumptionController.FindById);

export default consumptionRouter;
