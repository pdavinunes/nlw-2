import express from 'express';
import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';

const router = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
router.get('/connections', connectionsController.index);
router.post('/connections', connectionsController.store);
router.get('/classes', classesController.index);
router.post('/classes', classesController.store);

export default router;