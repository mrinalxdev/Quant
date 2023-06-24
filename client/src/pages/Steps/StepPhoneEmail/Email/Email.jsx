import React, { useState } from "react";
import Card from "../../../../components/Card/Card";
import Button from "../../../../components/shared/button/Button";
import Input from "../../../../components/shared/input/Input";
import styles from "../StepPhoneEmail.module.css";

const Email = ({ onNext }) => {
  const [emialInitials, setEmailInitials] = useState("");

  return (
    <>
      <div>
        <Card title="Enter Your Email ID" logoText="📧">
          <Input
            value={emialInitials}
            onChange={(e) => setEmailInitials(e.target.value)}
          />
          <div>
            <div>
              <Button text="Next" onClick={onNext} />
            </div>
            <p className={styles.bottomPara}>
              By entering your email initials you are agreeing to our Terms of
              Services and Privacy Policy , Thanks !
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Email;
