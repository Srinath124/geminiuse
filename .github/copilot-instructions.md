<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
Full-stack Node.js Express + React Todo List application with JSON backend.

- **Backend**: Node.js with Express.js
- **Frontend**: React with axios for API calls
- **Data Storage**: JSON file-based storage
- **API**: RESTful endpoints for CRUD operations

## Development Instructions

### Getting Started
1. Install dependencies:
   - Root: `npm install`
   - Server: `npm install` (in /server)
   - Client: `npm install` (in /client)

2. Start development:
   - `npm run dev` (runs both server and client concurrently)
   - Server runs on: http://localhost:5000
   - Client runs on: http://localhost:3000

### File Structure
```
.
├── server/
│   ├── data/
│   │   └── todos.json
│   ├── routes/
│   │   └── todos.js
│   ├── package.json
│   └── index.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── public/
│       └── index.html
├── package.json
└── README.md
```

### API Endpoints
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Environment Variables
Create a `.env` file in the server directory:
```
PORT=5000
NODE_ENV=development
```
