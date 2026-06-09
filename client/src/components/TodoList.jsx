import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggleComplete, onDeleteTodo, onUpdateTodo }) {
  const completedCount = todos.filter(todo => todo.completed).length;

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>✨ No todos yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      <div className="todo-stats">
        <span>{todos.length} total</span>
        <span>{completedCount} completed</span>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
