import React from "react";
import Card from "../../../../components/Card/Card";
import Button from "../../../../components/shared/button/Button";

const Phone = () => {
  return (
    <div>
      <Card title="Enter Your Phone Number" logoText="☎️">
        <div>
          <Button text="Next" />
        </div>
      </Card>
    </div>
  );
};

export default Phone;
