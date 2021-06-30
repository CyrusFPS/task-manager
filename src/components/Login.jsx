import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/user';
import { store } from '../App';
import { useHistory } from 'react-router';
import styles from '../css/login.module.css';

const Login = () => {
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

    dispatch(userLogin({ email, password }));
    
    setEmail('');
    setPassword('');
  };
  return (
      <div className={styles.customBody}>
        <div className={styles.loginContainer}>
          <div className={styles.signIn}>SIGN IN</div>
          <input type="email" name="email" id="" value={email} onChange={e => setEmail(e.target.value)} className={styles.email} placeholder="johndoe@gmail.com" />
          <input type="password" name="password" id="" value={password} onChange={e => setPassword(e.target.value)} className={styles.password} placeholder="Password" />
          <button className={styles.enter} type="submit" onClick={onSubmit}>ENTER</button>
          <a href="" className={styles.signUpLink} onClick={() => history.push('/signup')}>Sign up</a>
          <a href="" className={styles.forgotPassword}>Forgot your password?</a>
        </div>
      </div>
  )
}

export default Login
