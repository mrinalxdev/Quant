import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginFomr, setLoginForm] = useState();

  return (
    <form>
      <Input
        name="email"
        placeholder="Enter your emial"
        mb={2}
        onChange={() => {}}
      />
      <Input name='password' placeholder='Password' type='password' onChange={() => {}}/>

      <Button>Log In</Button>
    </form>
  );
};

export default Login;
