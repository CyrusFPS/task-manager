import React from 'react'
import styles from '../css/signup.module.css'

const Signup = () => {
  return (
    <div className={styles.customBody}>
      <div className={styles.signupContainer}>
        <div className={styles.signUp}>SIGN UP</div>
        <input type="email" name="email" id="" className={styles.email} placeholder="johndoe@gmail.com" />
        <input type="password" name="password" id="" className={styles.password} placeholder="Password" />
        <button className={styles.enter}>ENTER</button>
        <a href="" className={styles.signInLink}>Sign in</a>
      </div>
    </div>
  )
}

export default Signup
