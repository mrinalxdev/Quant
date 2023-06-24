import React, { useState } from "react";
import Card from "../../../../components/Card/Card";
import Button from "../../../../components/shared/button/Button";
import Input from "../../../../components/shared/input/Input";
import styles from "../StepPhoneEmail.module.css"

const Phone = () => {

  const [phoneNumber, setPhoneNumber] = useState("")

  return (
    <div>
      <Card title="Enter Your Phone Number" logoText="☎️">
        <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div>
          <div>
          <Button text="Next" />

          </div>
          <p className={styles.bottomPara}>By entering your phone Number you are agreeing to our Terms of Services and Privacy Policy , Thanks !</p>
        </div>
      </Card>
    </div>
  );
};

export default Phone;
