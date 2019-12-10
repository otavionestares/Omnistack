import { Router } from 'express';

import UserController from './app/controllers/userController';
import SessionController from './app/controllers/sessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', async (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.post('/user', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/user', UserController.update);

export default routes;
