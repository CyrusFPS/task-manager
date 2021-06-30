import React, { useState } from 'react'
import styles from '../css/addTask.module.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { store } from '../App';
import { addTask } from '../store/tasks';

const AddTask = () => {
  const [selected, setSelected] = useState(true);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const dispatch = useDispatch();
  const state = store.getState();
  let history = useHistory();

  const onClick = e => {
    e.preventDefault();

    if (title === '' || startTime === '' || endTime === '') return alert("Please fill out all fields");

    const ids = state.entities.tasks.list.map(task => task.id * 1);
    const id = Math.max(...ids) + 1;
    const task = { id, title, time: `${startTime} - ${endTime}`, often: selected, status: false };

    dispatch(addTask(task, state.auth.user.userId));

    history.push("/home");
  };

  const dailyClick = () => {
    if (selected) {
      return;
    } else {
      setSelected(!selected);
    };
  };

  const onceClick = () => {
    if (selected) {
      setSelected(!selected);
    } else {
      return;
    };
  };

  return (
    <div className={styles.customBody}>
      <div className={styles.container}>
        <button onClick={() => history.push("/home")} className={styles.exitButton}></button>
        <div className={styles.title}>ADD TASK</div>
        <input type="text" name="task-name" id="task-name" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.taskName} placeholder="Task Name" />
        <input type="time" name="start-time" id="start-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className={styles.startButton} placeholder="7:00AM" />
        <input type="time" name="end-time" id="end-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className={styles.endButton} placeholder="8:00AM" />
        <button onClick={dailyClick} style={selected ? { textDecoration: 'underline' } : { textDecoration: 'none' }} className={styles.dailyButton}>DAILY</button>
        <button onClick={onceClick} style={!selected ? { textDecoration: 'underline' } : { textDecoration: 'none' }} className={styles.onceButton}>ONCE</button>
        <button onClick={e => onClick(e)} className={styles.enter}>ENTER</button>
      </div>
    </div>
  )
}

export default AddTask
