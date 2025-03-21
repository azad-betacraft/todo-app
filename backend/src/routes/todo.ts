import express from 'express';
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} from '../controllers/todo';

const router = express.Router();

// Create a new todo
router.post('/', createTodo);

// Get all todos
router.get('/', getTodos);

// Get a single todo by ID
router.get('/:id', getTodoById);

// Update a todo
router.patch('/:id', updateTodo);

// Delete a todo
router.delete('/:id', deleteTodo);

export default router; 