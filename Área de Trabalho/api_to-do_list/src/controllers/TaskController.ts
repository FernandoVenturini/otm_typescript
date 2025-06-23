// OS CONTROLLERS CONTROLAM OS DADOS QUE ESTAO CHEGANDO.
import { Request, Response } from 'express';
import TaskService from '../services/TaskService';
import { Task } from '../models/Task';

const taskService = new TaskService();

class TaskController {

    constructor() {

    }

    get(Req: Request, Res: Response) {
        const { status } = Req.query;
        if (status && (status === "in_progress" || status === "Em andamento" || status === "completed")) {
            taskService.get(status);
        } else {
            Res.json({error: "Invalid parameters! Please provide a status."});
            Res.status(400);
        }
    }

    add(Req:Request, Res:Response) {
        const { id, descricao, data, status } = Req.body;

        if (id && descricao && data && status) {

            if (status === "Pendente" || status === "Em andamento" || status === "Concluida") {
                const result = taskService.add(Req.body);
                Res.json(result);
                Res.status(201);
            } else {
                Res.json({error: "Invalid status: must be 'Pendente', 'Em andamento', or 'Concluida'."});
                Res.status(400);
            }            
        } else {
            Res.json({error: "Invalid parameters!"});
            Res.status(401);
        }

    }
}

export default TaskController;