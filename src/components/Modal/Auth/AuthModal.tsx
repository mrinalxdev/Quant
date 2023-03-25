import React from 'react'
import {
    useDisclosure, 
    Button, 
    Modal, 
    ModalOverlay, 
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { authModelState } from '../../../atoms/authModelAtom'


const AuthModal:ReactFC = () => {
    const [modelState, setModelState] = useRecoilState(authModelState)

    const handleClose = () => {
      setModelState((prev) => ({
        ...prev,
        open : false,
      }))
    }

    return (
      <>
        <Modal isOpen={modelState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1> Hello This is Mrinal's Modal</h1>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AuthModal