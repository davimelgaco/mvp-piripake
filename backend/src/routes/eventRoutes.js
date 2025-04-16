import express from 'express';
import EventController from '../controllers/eventController.js';

const eventRouter = express.Router();

eventRouter.post('/', EventController.Create);
eventRouter.get('/', EventController.FindAll);
eventRouter.get('/:id', EventController.FindById);
eventRouter.put('/:id', EventController.Update);
eventRouter.delete('/:id', EventController.Delete);

export default eventRouter;
