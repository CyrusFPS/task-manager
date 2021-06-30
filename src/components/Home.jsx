import React, { useEffect } from 'react'
import styles from '../css/home.module.css';
import MainTasks from './MainTasks';
import SideTasks from './SideTasks';
import { useHistory } from 'react-router';
import { store } from '../App';

const Home = () => {
    let history = useHistory();

    useEffect(() => {
        const state = store.getState();
        if (!state.auth.user.status.loggedIn) history.push("/login");
    }, []);

    return (
          <div className={styles.homeContainer}>
            <div className={styles.taskBar}>
                <p className={styles.tasksTitle}>TASKS</p>
                <ul className={styles.sideTaskList}>
                    <SideTasks />
                </ul>
            </div>
            <div className={styles.mainContainer}>
                <h1 className={styles.mainTitle}>TODAY</h1>
                <ul className={styles.mainTaskList}>
                    <li className={styles.mainTask1}>
                        <h4 className={styles.mtaskTitle1}>ADD TASK HERE</h4>
                        <h4 className={styles.mtaskTime1}></h4>
                        <div onClick={() => history.push("/addTask")} className={styles.mtaskStatusBox1}>
                            <h4 className={styles.mtaskStatus1}>ADD TASK</h4>
                        </div>
                    </li>
                        <MainTasks />
                </ul>
            </div>
        </div>
  )
}

export default Home
