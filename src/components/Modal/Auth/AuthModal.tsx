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


const AuthModal:ReactFC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1> Hello This is Mrinal's Modal</h1>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Create Account</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AuthModal