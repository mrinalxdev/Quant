import React from 'react'
import { Link } from "react-router-dom"
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <span>👋</span>
        <h1>Welcome to MindMingle !</h1>
      </div>
      <p>
        We are working hard to get MindMingle ready for everyone! While <br /> we wrap up the finishing youches, we are adding people gradually <br /> to make sure nothing breaks
      </p>
      <div>
        <button>Get your Username 👉 </button>
      </div>
      <div>
        <span>Have an invite text ?</span>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  )
}

export default Home
