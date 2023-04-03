import React from "react";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { authModelState } from "../../../atoms/authModelAtom";
import Login from "./Login";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modelState = useRecoilValue(authModelState);

  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modelState.view === "login" && <Login />}
      {/* {modelState.view === 'signup' && <Signup /> } */}
    </Flex>
  );
};

export default AuthInputs;
