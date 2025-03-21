import { Request, Response } from 'express';
import { Todo } from '../models/todo';

// Create a new todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Could not create todo' });
  }
};

// Get all todos
export const getTodos = async (_req: Request, res: Response) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch todos' });
  }
};

// Get a single todo by ID
export const getTodoById = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch todo' });
  }
};

// Update a todo
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Could not update todo' });
  }
};

// Delete a todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete todo' });
  }
}; 