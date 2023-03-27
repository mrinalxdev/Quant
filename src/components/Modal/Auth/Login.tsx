import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginFomr, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (event: React.ChnageEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="Enter your emial"
        mb={2}
        onChange={onChange}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        onChange={onChange}
      />

      <Button width='100%' height='36px' mt={2} mb={2} type="submit">Log In</Button>
    </form>
  );
};

export default Login;
