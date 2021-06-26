import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userCreate } from '../store/user';
import { store } from '../App';
import { useHistory } from 'react-router';
import styles from '../css/signup.module.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const unsubscribeMe = store.subscribe(() => {
    const state = store.getState();
    if (state.auth.user.status.loggedIn) {
      history.push("/home");
      unsubscribeMe();
    };
  });
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') return alert("Please enter an email and password.");

    dispatch(userCreate({ email, password }));
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.customBody}>
      <div className={styles.signupContainer}>
        <div className={styles.signUp}>SIGN UP</div>
        <input type="email" name="email" id="email" className={styles.email} value={email} onChange={e => setEmail(e.target.value)} placeholder="johndoe@gmail.com" />
        <input type="password" name="password" id="password" className={styles.password} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button className={styles.enter} onClick={onSubmit}>ENTER</button>
        <a href="" className={styles.signInLink} onClick={() => history.push("/login")}>Sign In</a>
      </div>
    </div>
  )
}

export default Signup
