import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onClick = () => {
    setStep(step + 1);
  };
  return (
    <div>
      Phone and Email
      <Step onClick={onClick} />
    </div>
  );
};

export default Authenticate;
