# Todo App Backend API

This is the backend API for the Todo application, built with Node.js, Express, TypeScript, and MongoDB.

## API Endpoints

### Todos

#### Get all todos
- **GET** `/api/todos`
- Returns an array of all todos, sorted by creation date (newest first)

#### Get a specific todo
- **GET** `/api/todos/:id`
- Returns a single todo by ID

#### Create a todo
- **POST** `/api/todos`
- Request body:
  ```json
  {
    "title": "string (required)",
    "description": "string (optional)",
    "completed": "boolean (optional, defaults to false)"
  }
  ```

#### Update a todo
- **PATCH** `/api/todos/:id`
- Request body (all fields optional):
  ```json
  {
    "title": "string",
    "description": "string",
    "completed": "boolean"
  }
  ```

#### Delete a todo
- **DELETE** `/api/todos/:id`
- Deletes a todo by ID

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Start production server:
   ```bash
   npm start
   ```

## Health Check

- **GET** `/health`
- Returns server status 