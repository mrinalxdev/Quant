import React from "react";
import { Link } from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = () => {

  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" className={styles.logo}>
        <h1>MindMingle</h1>
      </Link>
    </nav>
  );
};

export default Navigation;
