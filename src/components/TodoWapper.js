import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import ShowTodo from './Todos';
import EditTodoForm from './EditTodoForm';

uuidv4();

const Todo = () => {
  const [todos, setTodos] = useState([{
    id: uuidv4(), task: 'go shopping', completed: false, isEditing: false,
  }]);
  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(), task: todo, completed: false, isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id
      ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };
  const editTask = (task, id) => {
    setTodos(todos.map((todo) => (todo.id === id ? {
      ...todo,
      task,
      isEditing: !todo.isEditing,
    } : todo)));
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <ShowTodo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}
    </div>
  );
};

export default Todo;
