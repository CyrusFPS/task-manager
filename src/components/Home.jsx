import React from 'react'
import styles from '../css/home.module.css';

const Home = () => {
    return (
          <div class={styles.homeContainer}>
            <div class={styles.taskBar}>
                <p class={styles.tasksTitle}>TASKS</p>
                <ul class={styles.sideTaskList}>
                    <li class={styles.sideTask1}>
                        <div class={styles.taskExit1}></div>
                        <h4 class={styles.taskTitle1}>Go To Gym</h4>
                        <h4 class={styles.taskTime1}>5:00AM - 6:30AM</h4>
                        <h4 class={styles.taskOften1}>DAILY</h4>
                    </li>
                    <li class={styles.sideTask2}>
                        <div class={styles.taskExit2}></div>
                        <h4 class={styles.taskTitle2}>Walk The Dog</h4>
                        <h4 class={styles.taskTime2}>7:00AM - 8:00AM</h4>
                        <h4 class={styles.taskOften2}>DAILY</h4>
                    </li>
                    <li class={styles.sideTask3}>
                        <div class={styles.taskExit3}></div>
                        <h4 class={styles.taskTitle3}>Finish Project</h4>
                        <h4 class={styles.taskTime3}>9:00AM - 10:00AM</h4>
                        <h4 class={styles.taskOften3}>ONCE</h4>
                    </li>
                </ul>
            </div>
            <div class={styles.mainContainer}>
                <h1 class={styles.mainTitle}>TODAY</h1>
                <ul class={styles.mainTaskList}>
                    <li class={styles.mainTask1}>
                        <h4 class={styles.mtaskTitle1}>Go To Gym</h4>
                        <h4 class={styles.mtaskTime1}>5:00AM - 6:30AM</h4>
                        <div class={styles.mtaskStatusBox1}>
                            <h4 class={styles.mtaskStatus1}>COMPLETED</h4>
                        </div>
                    </li>
                    <li class={styles.mainTask2}>
                        <h4 class={styles.mtaskTitle2}>Walk The Dog</h4>
                        <h4 class={styles.mtaskTime2}>7:00AM - 8:00AM</h4>
                        <div class={styles.mtaskStatusBox2}>
                            <h4 class={styles.mtaskStatus2}>NOT COMPLETED</h4>
                        </div>
                    </li>
                    <li class={styles.mainTask3}>
                        <h4 class={styles.mtaskTitle3}>Finish Project</h4>
                        <h4 class={styles.mtaskTime3}>9:00AM - 10:00AM</h4>
                        <div class={styles.mtaskStatusBox3}>
                            <h4 class={styles.mtaskStatus3}>COMPLETED</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Home
