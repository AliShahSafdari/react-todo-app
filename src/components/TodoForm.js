import React, { useState } from 'react';

const TodoForm = (prop) => {
  const { addTodo } = prop;
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="What is today task?" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
