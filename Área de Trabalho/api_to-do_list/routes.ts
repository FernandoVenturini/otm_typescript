import { Router } from 'express';

const router = Router();

router.get('/task', (req, res) => {
    res.send('Welcome to the API!');
});

router.get('/task/:id_task', (req, res) => {
    const taskId = req.params.id_task;
    res.send(`Details for task with ID: ${taskId}`);
});

router.post('/task', (req, res) => {
    const newTask = req.body;
    // Here you would typically save the new task to a database
    res.status(201).send(`Task created with ID: ${newTask.id}`);
});

router.delete('/task/:id_task', (req, res) => {
    const taskId = req.params.id_task;
    // Here you would typically delete the task from a database
    res.send(`Task with ID: ${taskId} deleted`);
})

export default router;