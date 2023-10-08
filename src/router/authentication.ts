import express from 'express';

import { login, register } from '../controller/authentication';
import { getAllUsers } from '../controller/users';

export default (router: express.Router) => {
  router.post('auth/register', register);
  router.post('auth/login', login);
  router.get('/users', getAllUsers);
};
