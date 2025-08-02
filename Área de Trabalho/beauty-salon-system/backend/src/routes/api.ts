import { Router } from 'express';
import { getAppointments, createAppointment, updateAppointment } from '../controllers/appointmentController';
import { getServices, getServiceById } from '../controllers/serviceController';
import { getUsers, getUserById } from '../controllers/userController';

const router = Router();

// Rotas para agendamentos
router.get('/appointments', getAppointments);
router.post('/appointments', createAppointment);
router.put('/appointments/:id', updateAppointment);

// Rotas para serviços
router.get('/services', getServices);
router.get('/services/:id', getServiceById);

// Rotas para usuários
router.get('/users', getUsers);
router.get('/users/:id', getUserById);

export default router;