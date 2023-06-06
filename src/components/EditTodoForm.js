import React, { useState } from 'react';

const EditTodoForm = (prop) => {
  const { editTodo, task } = prop;
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      editTodo(value, task.id);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Update Task?" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTodoForm;
