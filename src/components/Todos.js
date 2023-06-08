import React from 'react';

const ShowTodo = (prop) => {
  const {
    task, toggleComplete, deleteTodo, editTodo,
  } = prop;
  return (
    <div className="list-container">
      <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
      <p
        className={task.completed ? 'linethtough' : ''}
      >
        {task.task}
      </p>
      <div>
        <button type="button" onClick={() => editTodo(task.id)}>Eidt</button>
        <button type="button" onClick={() => deleteTodo(task.id)}>×</button>
      </div>
    </div>
  );
};

export default ShowTodo;
