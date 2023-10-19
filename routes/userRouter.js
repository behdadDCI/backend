import express from 'express';
import { createUser } from '../controller/userController.js';
const router = express.Router();
router.post("/api/user/create", createUser)
export default router;