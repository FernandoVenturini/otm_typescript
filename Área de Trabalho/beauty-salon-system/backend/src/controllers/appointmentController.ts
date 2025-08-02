import { Request, Response } from 'express';
import { Appointment } from '../models/Appointment';

// Simulação de banco de dados em memória
let appointments: Appointment[] = [
  {
    id: '1',
    clientId: '101',
    serviceId: '201',
    professionalId: '301',
    date: new Date('2023-08-15'),
    time: '10:00',
    status: 'confirmed'
  },
  {
    id: '2',
    clientId: '102',
    serviceId: '202',
    professionalId: '302',
    date: new Date('2023-08-15'),
    time: '11:30',
    status: 'pending'
  }
];

export const getAppointments = (req: Request, res: Response) => {
  try {
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const createAppointment = (req: Request, res: Response) => {
  try {
    const { clientId, serviceId, professionalId, date, time } = req.body;
    
    const newAppointment: Appointment = {
      id: (appointments.length + 1).toString(),
      clientId,
      serviceId,
      professionalId,
      date: new Date(date),
      time,
      status: 'pending'
    };
    
    appointments.push(newAppointment);
    
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const updateAppointment = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const appointmentIndex = appointments.findIndex(app => app.id === id);
    
    if (appointmentIndex === -1) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }
    
    appointments[appointmentIndex].status = status;
    
    res.status(200).json(appointments[appointmentIndex]);
  } catch (error) {
    console.error('Erro ao atualizar agendamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};