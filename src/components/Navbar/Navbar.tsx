import React from 'react'
import { Flex, Image, Heading } from '@chakra-ui/react'
import SearchInput from './SearchInput'
import RightContent from './RightContent/RightContent'


const Navbar:React.FC = () => {
  return (
    <Flex bg='white'  height='44px' padding='6px 12px' borderRadius='xl' mt='4px' mx='5px'>
        <Flex align='center'>
          <Image src='/images/redditFace.svg' height='30px' />
          <Image src='/images/redditText.svg' height='46px' display= {{ base: 'none', md: 'unset'}} />
        </Flex>
        <SearchInput />
        <RightContent /> 
        {/* <Direcotry />
        */}
    </Flex>
  )
}

export default Navbar