import React, { useState } from "react";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModelState } from "../../../atoms/authModelAtom";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModelState = useSetRecoilState(authModelState);

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
        required
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="grey.50"
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        mb={2}
        onChange={onChange}
        required
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="grey.50"
      />

      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        Log In
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here ? </Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onCLick={() =>
            setAuthModelState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
