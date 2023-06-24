import React from 'react'
import styles from "./Input.module.css"

const Input = ({props}) => {
  return (
    <div>
      <input className={styles.textInput} type="text" {...props} />
    </div>
  )
}

export default Input
