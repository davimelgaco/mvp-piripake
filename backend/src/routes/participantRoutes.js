import express from 'express';
import ParticipantController from '../controllers/participantController.js';

const participantRouter = express.Router();

participantRouter.post('/', ParticipantController.Create);
participantRouter.get('/', ParticipantController.FindAll);
participantRouter.get('/:id', ParticipantController.FindById);
participantRouter.put('/:id', ParticipantController.Update);
participantRouter.delete('/', ParticipantController.Delete);

export default participantRouter;
