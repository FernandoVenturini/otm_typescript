import { Task } from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";
// OS SERVIÇOS CONTÊM A LÓGICA DE NEGÓCIO E INTERAGEM COM OS REPOSITÓRIOS.

const taskRepository = new TaskRepository();

class TaskService {

    constructor() {

    }

    add(data:Task): Task{
        return taskRepository.add(data);
    }
}

export default TaskService;