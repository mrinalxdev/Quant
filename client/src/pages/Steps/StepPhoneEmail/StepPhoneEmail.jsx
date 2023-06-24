import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./StepPhoneEmail.module.css";

const PhoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onChange }) => {
  const [authStep, setAuthStep] = useState("phone");
  const AuthStep = PhoneEmailMap[authStep];

  // const onChange = () => {

  // }
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button
              className={`${styles.buttonPhone} ${authStep === 'phone' ? styles.active : '' }`}
              onClick={() => setAuthStep("phone")}
            >
              Verify through Phone
            </button>
            <button
              className={`${styles.buttonPhone} ${authStep === 'email' ? styles.active : '' }`}
              onClick={() => setAuthStep("email")}
            >
              Verify through Email
            </button>
          </div>
          <AuthStep onClick={onChange} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
