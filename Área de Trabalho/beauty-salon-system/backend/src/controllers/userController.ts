import { Request, Response } from 'express';
import { User } from '../models/User';

// Simulação de banco de dados em memória
let users: User[] = [
  {
    id: '101',
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    phone: '(11) 99999-9999',
    role: 'client',
    preferences: ['Corte de cabelo', 'Coloração'],
    createdAt: new Date('2022-05-15')
  },
  {
    id: '301',
    name: 'Carlos Oliveira',
    email: 'carlos.oliveira@salao.com',
    phone: '(11) 98888-8888',
    role: 'professional',
    createdAt: new Date('2021-03-10')
  }
];

export const getUsers = (req: Request, res: Response) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const getUserById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};