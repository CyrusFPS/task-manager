import React from 'react'
import styles from '../css/home.module.css';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../store/tasks';

const MainTask = (props) => {
  const dispatch = useDispatch()
  const task = props.task;

  const onClick = (task) => {
    dispatch(changeTaskStatus(task));
  };

  return (
    <li className={styles.mainTask1}>
      <h4 className={styles.mtaskTitle1}>{task.title}</h4>
      <h4 className={styles.mtaskTime1}>{task.time}</h4>
      <div onClick={() => onClick(task)} className={styles.mtaskStatusBox1}>
          <h4 className={styles.mtaskStatus1}>{task.status ? "COMPLETED" : "NOT COMPLETED"}</h4>
      </div>
    </li>
  )
}

export default MainTask
