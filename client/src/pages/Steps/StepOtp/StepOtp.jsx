import React, { useState } from "react";
import styles from "./StepOtp.module.css";
import Card from "../../../components/Card/Card";
import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";

const StepOtp = ({ onClick }) => {
  const [otp, setOtp] = useState("");

  const next = () => {};

  return (
    <div>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" logoText="🔒">
          <Input value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={styles.actionButton}>
            <Button onClick={next} text="Next" />
          </div>
          <p className={styles.bottomPara}>
            Thanks for accepting our Terms of Service and Privacy Policy 
          </p>
        </Card>
      </div>
    </div>
  );
};

export default StepOtp;
