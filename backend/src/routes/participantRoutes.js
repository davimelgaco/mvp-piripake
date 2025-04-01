const express = require('express');
const ParticipantController = require('../controllers/participantController');

const participantRouter = express.Router();

participantRouter.post('/participant', ParticipantController.Create)
participantRouter.get('/participant', ParticipantController.FindAll)

module.exports = participantRouter;