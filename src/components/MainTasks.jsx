import React, { useEffect, useState } from 'react';
import MainTask from './MainTask';
import { loadTasks } from '../store/tasks';
import { useDispatch } from 'react-redux'; 
import { store } from '../App';

const MainTasks = () => {
  const dispatch = useDispatch();
  const state = store.getState();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    dispatch(loadTasks(state.auth.user.userId));
  }, []);

  const unsubscribeMe = store.subscribe(() => {
    const newState = store.getState();
    setTasks(newState.entities.tasks.list);
  });

  if (!tasks) {
    return (
      <>
      </>
    )
  }

  if (tasks.length === 0) {
    return (
      <>
      </>
    )
  }

  return (
    <>
      {tasks.map(task => (
        <MainTask task={task} />
      ))}
    </>
  )
}

export default MainTasks
