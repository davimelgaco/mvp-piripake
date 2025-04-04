const express = require('express');
const EventController = require('../controllers/eventController');

const eventRouter = express.Router();

eventRouter.post('/', EventController.Create)
eventRouter.get('/', EventController.FindAll)
eventRouter.get('/:id', EventController.FindById)
eventRouter.put('/:id', EventController.Update)
eventRouter.delete('/:id', EventController.Delete)


module.exports = eventRouter;