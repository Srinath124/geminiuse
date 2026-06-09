# 📝 Todo Application

A full-stack Todo application built with Node.js/Express backend and React frontend, using JSON for data storage.

## Features

✅ Create, read, update, and delete todos
✅ Mark todos as completed
✅ Edit todo details
✅ Responsive design
✅ Real-time updates
✅ JSON-based data persistence

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JSON** - Data storage

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling

## Project Structure

```
.
├── server/
│   ├── data/
│   │   └── todos.json          # Todo data storage
│   ├── routes/
│   │   └── todos.js            # API routes
│   ├── index.js                # Express server
│   ├── package.json
│   └── .env                    # Environment variables
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.jsx    # Add todo form
│   │   │   ├── TodoList.jsx    # Todo list display
│   │   │   └── TodoItem.jsx    # Individual todo item
│   │   ├── App.jsx             # Main app component
│   │   ├── App.css
│   │   ├── index.js            # React entry point
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   └── package.json
├── package.json                # Root package
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies:**
   ```bash
   npm run install-all
   ```

   Or manually:
   ```bash
   npm install
   npm --prefix server install
   npm --prefix client install
   ```

3. **Start the development servers:**
   ```bash
   npm run dev
   ```

   This will start both the backend server and React frontend concurrently:
   - Backend: http://localhost:5000
   - Frontend: http://localhost:3000

### Individual Server Commands

**Start backend only:**
```bash
npm run server
```
Backend will run on http://localhost:5000

**Start frontend only:**
```bash
npm run client
```
Frontend will run on http://localhost:3000

## API Endpoints

### GET `/api/todos`
Fetch all todos

**Response:**
```json
[
  {
    "id": "1",
    "title": "Learn Node.js",
    "description": "Study Express and async/await patterns",
    "completed": false,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### POST `/api/todos`
Create a new todo

**Request Body:**
```json
{
  "title": "New Todo",
  "description": "Optional description"
}
```

### PUT `/api/todos/:id`
Update a todo

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "completed": true
}
```

### DELETE `/api/todos/:id`
Delete a todo

## Environment Variables

Create a `.env` file in the `server/` directory:

```
PORT=5000
NODE_ENV=development
```

## Features Guide

### Create a Todo
1. Enter a title in the form
2. (Optional) Add a description
3. Click "Add Todo"

### Mark Complete
- Click the checkbox next to a todo to mark it as completed
- Completed todos will have a strikethrough effect

### Edit a Todo
1. Click the ✏️ edit button on the todo item
2. Modify the title or description
3. Click "Save" or "Cancel"

### Delete a Todo
- Click the 🗑️ delete button to remove a todo

## Available Scripts

In the root directory:

- `npm run dev` - Start both servers concurrently
- `npm run server` - Start Express server only
- `npm run client` - Start React dev server only
- `npm run build` - Build the React app for production
- `npm run install-all` - Install all dependencies

## File Storage

Todos are stored in `server/data/todos.json`. The file is automatically created and updated when you add, modify, or delete todos.

## Development

### Adding New Features

1. **Backend**: Add new routes in `server/routes/todos.js`
2. **Frontend**: Add new components in `client/src/components/`
3. **Styling**: Each component has its own CSS file for modularity

### Data Structure

Each todo object has:
- `id` - Unique identifier (timestamp-based)
- `title` - Todo title (required)
- `description` - Todo description (optional)
- `completed` - Completion status (boolean)
- `createdAt` - Creation timestamp (ISO 8601)

## Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use:
- Backend: Change PORT in `server/.env`
- Frontend: Set PORT in terminal before starting `PORT=3001 npm --prefix client start`

### CORS Issues
The backend is configured to accept requests from localhost:3000. If running frontend on a different port, update the proxy in `client/package.json`.

### JSON File Not Found
The `data/todos.json` file will be created automatically on first run. If issues persist, ensure the `server/data/` directory exists.

## Production

To build for production:
```bash
npm run build
```

This creates a production-optimized React build in `client/build/`.

## License

MIT License - Feel free to use this project for learning and personal use.

## Support

For issues or questions, create an issue or refer to the documentation above.
