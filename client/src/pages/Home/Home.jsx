import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/Card/Card";
import Button from "../../components/shared/button/Button";

const Home = () => {
  const navigate = useNavigate();

  const registerPage = () => {
    navigate("/auth");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to MindMingle !" logoText="👋">
        <p className={styles.text}>
          We are working hard to get MindMingle ready for everyone! While we
          wrap up the finishing youches, we are adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={registerPage} text="Get your Username" />
        </div>
        <div className={styles.hasInvite}>
          <span className={styles.footerText}>Have an invite text ?</span>
          <Link to="/login" className={styles.login}>
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
