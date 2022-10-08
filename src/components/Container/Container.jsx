import React from 'react'
import FormToDo from '../FormToDo/FormToDo.jsx';
import TaskList from '../TaskList/TaskList.jsx';

export default function Container() {
  return (
    <div>
      Container!
      <FormToDo />
      <TaskList />
    </div>
  );
}