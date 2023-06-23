import React from 'react'
// import { Link } from "react-router-dom"
import styles from './Card.module.css'


const Card = ( { title, logoText, children }) => {
  return (
    <div className={styles.card}>
        <div className={styles.headingWrapper}>
          <span className={styles.logo}>{logoText}</span>
          <h1 className={styles.heading}>{title}</h1>
        </div>
        {children}
      </div>
  )
}

export default Card
