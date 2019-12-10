import { Router } from 'express';
import SessionController from './app/controllers/sessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

export default routes;
