import React from 'react'
import { Flex, Image, Heading } from '@chakra-ui/react'


const Navbar:React.FC = () => {
  return (
    <Flex bg='white'  height='44px' padding='6px 12px'>
        <Flex align='center'>
          <Image src='/images/reddit-logo-app.jpg' hieght='sm' />
          <Heading>Reddit</Heading>
        </Flex>
    </Flex>
  )
}

export default Navbar