import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

type SearchInputProps = {
    // user : 
}

const SearchInput:React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1} mr={2} align='center'>
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' mb={1}
                />}
             />
            <Input 
              type='text' 
              placeholder='Search Reddit' 
              fontSize='10pt'
              _placeholder= {{ color : 'grey.500'}}
              _hover={{
                bg: 'white',
                border: '1px solid',
                borderColor: 'blue.500',
              }}
              _focus={{
                outline: 'none',
                border: '1px solid',
                borderColor: 'blue.500',
              }}
              height='34px'
              bg='grey.50'
            />
        </InputGroup>
    </Flex>
  )
}

export default SearchInput