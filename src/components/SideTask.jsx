import React, { useState } from 'react'
import styles from '../css/home.module.css';
import { deleteTask } from '../store/tasks';
import { useDispatch } from 'react-redux';
import { store } from '../App';

const SideTask = (props) => {
  const dispatch = useDispatch();
  const task = props.task;
  const [often, setOften] = useState(task.often);

  const removeOnClick = () => {
    const state = store.getState();
    dispatch(deleteTask(task, state.auth.user.userId));
  };

  const oftenOnClick = () => {
    setOften(!often);
  }
 
  return (
    <li className={styles.sideTask1}>
      <div onClick={removeOnClick} className={styles.taskExit1}></div>
      <h4 className={styles.taskTitle1}>{task.title}</h4>
      <h4 className={styles.taskTime1}>{task.time}</h4>
      <h4 onClick={oftenOnClick} className={styles.taskOften1}>{often ? "DAILY" : "ONCE"}</h4>
    </li>
  )
}

export default SideTask
