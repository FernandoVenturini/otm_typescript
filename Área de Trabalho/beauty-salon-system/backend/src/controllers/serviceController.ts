import { Request, Response } from 'express';
import { Service } from '../models/Service';

// Simulação de banco de dados em memória
let services: Service[] = [
  {
    id: '201',
    name: 'Corte de Cabelo',
    description: 'Cortes modernos e clássicos para todos os estilos',
    price: 50,
    duration: 45,
    category: 'hair'
  },
  {
    id: '202',
    name: 'Barba',
    description: 'Modelagem e acabamento profissional',
    price: 35,
    duration: 30,
    category: 'beard'
  },
  {
    id: '203',
    name: 'Coloração',
    description: 'Coloração completa com produtos de qualidade',
    price: 80,
    duration: 90,
    category: 'hair'
  },
  {
    id: '204',
    name: 'Penteado',
    description: 'Penteados para eventos e ocasiões especiais',
    price: 100,
    duration: 60,
    category: 'hair'
  }
];

export const getServices = (req: Request, res: Response) => {
  try {
    res.status(200).json(services);
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const getServiceById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const service = services.find(s => s.id === id);
    
    if (!service) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }
    
    res.status(200).json(service);
  } catch (error) {
    console.error('Erro ao buscar serviço:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};