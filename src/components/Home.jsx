import React from 'react'
import styles from '../css/home.module.css';
import MainTask from './MainTask';
import SideTask from './SideTask';

const Home = () => {
    return (
          <div className={styles.homeContainer}>
            <div className={styles.taskBar}>
                <p className={styles.tasksTitle}>TASKS</p>
                <ul className={styles.sideTaskList}>
                    <SideTask id={1} title="Go To Gym" time="5:00AM - 6:30AM" often={true}/>
                    <SideTask id={2} title="Walk The Dog" time="7:00AM - 8:00AM" often={true}/>
                    <SideTask id={3} title="Finish Project" time="9:00AM - 10:00AM" often={false}/>
                </ul>
            </div>
            <div className={styles.mainContainer}>
                <h1 className={styles.mainTitle}>TODAY</h1>
                <ul className={styles.mainTaskList}>
                    <li className={styles.mainTask1}>
                        <h4 className={styles.mtaskTitle1}>ADD TASK HERE</h4>
                        <h4 className={styles.mtaskTime1}></h4>
                        <div className={styles.mtaskStatusBox1}>
                            <h4 className={styles.mtaskStatus1}>ADD TASK</h4>
                        </div>
                    </li>
                    <MainTask id={1} title="Go To Gym" time="5:00AM - 6:30AM" status={true}/>
                    <MainTask id={2} title="Walk The Dog" time="7:00AM - 8:00AM" status={false}/>
                    <MainTask id={3} title="Finish Project" time="9:00AM - 10:00AM" status={true}/>
                </ul>
            </div>
        </div>
  )
}

export default Home
