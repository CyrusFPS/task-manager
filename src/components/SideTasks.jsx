import React, { useEffect, useState } from 'react';
import SideTask from './SideTask';
import { useDispatch } from 'react-redux'; 
import { store } from '../App';

const MainTasks = () => {
  const dispatch = useDispatch();
  const state = store.getState();
  const [tasks, setTasks] = useState([]);

  const unsubscribeMe = store.subscribe(() => {
    const newState = store.getState();
    setTasks(newState.entities.tasks.list);
  });

  if (tasks.length === 0) {
    return (
      <>
      </>
    )
  }

  return (
    <>
      {tasks.map(task => (
        <SideTask task={task} />
      ))}
    </>
  )
}

export default MainTasks
