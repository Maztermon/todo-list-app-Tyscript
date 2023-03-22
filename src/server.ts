import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Todo } from './Todo';
import { TodoService } from './TodoService';

const app = express();
// Port at 4000
const port = 4000;
const todoService = new TodoService();

app.use(cors());
app.use(bodyParser.json());


// Get all todos
app.get('/todos', (req, res) => {
    res.json(todoService.getTodos());
  });
  
  // Add a todo
  app.post('/todos', (req, res) => {
    const todo = req.body as Todo;
    todoService.addTodo(todo);
    res.status(201).send();
  });
  
  // Update a todo
  app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body as Todo;
    todoService.updateTodo(id, updatedTodo);
    res.status(200).send();
  });
  
  // Delete a todo
  app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todoService.deleteTodo(id);
    res.status(200).send();
  });
  
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});






