import React from 'react';
import styles from '../css/login.module.css';

const Login = () => {
  return (
      <div className={styles.customBody}>
        <div className={styles.loginContainer}>
          <div className={styles.signIn}>SIGN IN</div>
          <input type="email" name="email" id="" className={styles.email} placeholder="johndoe@gmail.com" />
          <input type="password" name="password" id="" className={styles.password} placeholder="Password" />
          <button className={styles.enter}>ENTER</button>
          <a href="" className={styles.signUpLink}>Sign up</a>
          <a href="" className={styles.forgotPassword}>Forgot your password?</a>
        </div>
      </div>
  )
}

export default Login
