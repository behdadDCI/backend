import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controller/userController.js';

const router = express.Router();

router.get("/api/user/display", getAllUsers)
router.put("/api/user/display/:id", updateUser)
router.delete("/api/user/display/:id", deleteUser)
router.get("/api/user/display/:id", getUser)
router.post("/api/user/create", createUser)


export default router;