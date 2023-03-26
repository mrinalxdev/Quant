import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModelState } from "../../../atoms/authModelAtom";

const AuthModal: ReactFC = () => {
  const [modelState, setModelState] = useRecoilState(authModelState);

  const handleClose = () => {
    setModelState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Modal isOpen={modelState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modelState.view === "login" && "Login"}
            {modelState.view === "signup" && "Sign Up"}
            {/* Auth Page */}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="center"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70"
              border='1px solid red'
            >
              {/* <OAtuhButtons /> */}
              {/* <AuthInputs />  */}
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
