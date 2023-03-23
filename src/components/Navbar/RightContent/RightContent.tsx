import React from 'react'
import { Flex } from '@chakra-ui/react'

type RightContentProps = {}

const RightContent = () => {
  return (
    <>
        <AuthModal />
        <Flex>
            <AuthButtons />
        </Flex>
    
    </>
  )
}

export default RightContent