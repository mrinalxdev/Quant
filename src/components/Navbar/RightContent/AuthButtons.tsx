import React from "react";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModelState } from '../../../atoms/authModelAtom'

const AuthButtons: React.FC = () => {
  const setAuthModelState = useSetRecoilState(authModelState);

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() =>  setAuthModelState({ open: true, view: 'Login Here'})}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() =>  setAuthModelState({ open: true, view: 'SignUp Here'})}
      >
        Sign In
      </Button>
    </>
  );
};

export default AuthButtons;
