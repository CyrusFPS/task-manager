import React from 'react'
import styles from '../css/addTask.module.css';

const addTask = () => {
  return (
    <div className={styles.customBody}>
      <div class={styles.container}>
        <button class={styles.exitButton}></button>
        <div class={styles.title}>ADD TASK</div>
        <input type="text" name="task-name" id="" class={styles.taskName} placeholder="Task Name" />
        <input type="text" name="start-time" id="" class={styles.startButton} placeholder="7:00AM" />
        <input type="text" name="end-time" id="" class={styles.endButton} placeholder="8:00AM" />
        <button class={styles.dailyButton}>DAILY</button>
        <button class={styles.onceButton}>ONCE</button>
        <button class={styles.enter}>ENTER</button>
      </div>
    </div>
  )
}

export default addTask
