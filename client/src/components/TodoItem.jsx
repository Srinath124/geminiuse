import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleSaveEdit = () => {
    onUpdateTodo(todo.id, {
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    setEditedDescription(todo.description);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="edit-input"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="edit-input"
          />
          <div className="edit-buttons">
            <button onClick={handleSaveEdit} className="btn-save">
              ✓ Save
            </button>
            <button onClick={handleCancel} className="btn-cancel">
              ✕ Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id, todo.completed)}
            className="todo-checkbox"
          />
          <div className="todo-content">
            <h3 className="todo-title">{todo.title}</h3>
            {todo.description && <p className="todo-description">{todo.description}</p>}
            <small className="todo-date">{new Date(todo.createdAt).toLocaleDateString()}</small>
          </div>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)} className="btn-edit" title="Edit">
              ✏️
            </button>
            <button onClick={() => onDeleteTodo(todo.id)} className="btn-delete" title="Delete">
              🗑️
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
