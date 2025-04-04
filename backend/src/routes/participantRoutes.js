const express = require('express');
const ParticipantController = require('../controllers/participantController');

const participantRouter = express.Router();

participantRouter.post('/', ParticipantController.Create)
participantRouter.get('/', ParticipantController.FindAll)
participantRouter.get('/:id', ParticipantController.FindById)
participantRouter.put('/:id', ParticipantController.Update)
participantRouter.delete('/:id', ParticipantController.Delete)

module.exports = participantRouter;