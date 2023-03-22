import React from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

type SearchInputProps = {
    // user : 
}

const SearchInput:React.FC<SearchInputProps> = () => {
  return (
    <Flex>
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<PhoneIcon color='gray.300' />}
             />
            <Input type='tel' placeholder='Phone number' />
        </InputGroup>
    </Flex>
  )
}

export default SearchInput