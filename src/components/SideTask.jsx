import React from 'react'
import styles from '../css/home.module.css';

const SideTask = (props) => {
  const task = { id: props.id, title: props.title, time: props.time, often: props.often };

  return (
    <li className={styles.sideTask1}>
      <div className={styles.taskExit1}></div>
      <h4 className={styles.taskTitle1}>{task.title}</h4>
      <h4 className={styles.taskTime1}>{task.time}</h4>
      <h4 className={styles.taskOften1}>{task.often ? "DAILY" : "ONCE"}</h4>
    </li>
  )
}

export default SideTask
