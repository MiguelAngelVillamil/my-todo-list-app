import React, {useState} from 'react'
import FormToDo from '../FormToDo/FormToDo.jsx';
import TaskList from '../TaskList/TaskList.jsx';

export default function Container() {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div>
      <FormToDo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList}/>
    </div>
  );
}