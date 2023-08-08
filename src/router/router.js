import express from 'express';
const router = express.Router();

import register from '../controller/register.controller.js';
import login from '../controller/login.controller.js';


router.post('/register', register);
router.post('/login', login);

export default router;
