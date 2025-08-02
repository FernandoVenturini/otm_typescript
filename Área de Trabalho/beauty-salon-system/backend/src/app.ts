import express, { Application } from 'express';
import cors from 'cors';
import apiRoutes from './routes/api';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api', apiRoutes);

export default app;