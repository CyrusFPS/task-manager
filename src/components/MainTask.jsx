import React, { useState } from 'react'
import styles from '../css/home.module.css';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../store/tasks';
import { store } from '../App';

const MainTask = (props) => {
  const task = props.task;
  const [status, setStatus] = useState(task.status);
  const state = store.getState();
  const dispatch = useDispatch()

  const onClick = (task) => {
    setStatus(!status);
    dispatch(changeTaskStatus(task.id, state.auth.user.userId));
  };

  return (
    <li className={styles.mainTask1}>
      <h4 className={styles.mtaskTitle1}>{task.title}</h4>
      <h4 className={styles.mtaskTime1}>{task.time}</h4>
      <div onClick={() => onClick(task)} className={styles.mtaskStatusBox1}>
          <h4 className={styles.mtaskStatus1}>{status ? "COMPLETED" : "NOT COMPLETED"}</h4>
      </div>
    </li>
  )
}

export default MainTask

// '[{"id":1,"time":"05:00 - 06:00","often":true,"title":"Go To Gym","status":true},{"id":2,"time":"07:00 - 08:00","often":true,"title":"Walk The Dog","status":false},{"id":3,"time":"09:00 - 10:00","often":false,"title":"Finish Project","status":true}]'