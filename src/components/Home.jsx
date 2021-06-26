import React from 'react'
import styles from '../css/home.module.css';

const Home = () => {
    return (
          <div className={styles.homeContainer}>
            <div className={styles.taskBar}>
                <p className={styles.tasksTitle}>TASKS</p>
                <ul className={styles.sideTaskList}>
                    <li className={styles.sideTask1}>
                        <div className={styles.taskExit1}></div>
                        <h4 className={styles.taskTitle1}>Go To Gym</h4>
                        <h4 className={styles.taskTime1}>5:00AM - 6:30AM</h4>
                        <h4 className={styles.taskOften1}>DAILY</h4>
                    </li>
                    <li className={styles.sideTask2}>
                        <div className={styles.taskExit2}></div>
                        <h4 className={styles.taskTitle2}>Walk The Dog</h4>
                        <h4 className={styles.taskTime2}>7:00AM - 8:00AM</h4>
                        <h4 className={styles.taskOften2}>DAILY</h4>
                    </li>
                    <li className={styles.sideTask3}>
                        <div className={styles.taskExit3}></div>
                        <h4 className={styles.taskTitle3}>Finish Project</h4>
                        <h4 className={styles.taskTime3}>9:00AM - 10:00AM</h4>
                        <h4 className={styles.taskOften3}>ONCE</h4>
                    </li>
                </ul>
            </div>
            <div className={styles.mainContainer}>
                <h1 className={styles.mainTitle}>TODAY</h1>
                <ul className={styles.mainTaskList}>
                    <li className={styles.mainTask1}>
                        <h4 className={styles.mtaskTitle1}>Go To Gym</h4>
                        <h4 className={styles.mtaskTime1}>5:00AM - 6:30AM</h4>
                        <div className={styles.mtaskStatusBox1}>
                            <h4 className={styles.mtaskStatus1}>COMPLETED</h4>
                        </div>
                    </li>
                    <li className={styles.mainTask2}>
                        <h4 className={styles.mtaskTitle2}>Walk The Dog</h4>
                        <h4 className={styles.mtaskTime2}>7:00AM - 8:00AM</h4>
                        <div className={styles.mtaskStatusBox2}>
                            <h4 className={styles.mtaskStatus2}>NOT COMPLETED</h4>
                        </div>
                    </li>
                    <li className={styles.mainTask3}>
                        <h4 className={styles.mtaskTitle3}>Finish Project</h4>
                        <h4 className={styles.mtaskTime3}>9:00AM - 10:00AM</h4>
                        <div className={styles.mtaskStatusBox3}>
                            <h4 className={styles.mtaskStatus3}>COMPLETED</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Home
