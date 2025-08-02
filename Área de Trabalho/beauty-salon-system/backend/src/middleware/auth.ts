import { Request, Response, NextFunction } from 'express';

// Middleware de autenticação simulado
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  // Em uma implementação real, verificaríamos o token JWT
  // Por enquanto, apenas passamos para o próximo middleware
  next();
};