import React from 'react'
import { useRecoilValue } from 'recoil'
import { authModelState } from '../../../atoms/authModelAtom'

type AuthInputsProps = {}

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modelState= useRecoilValue(authModelState)

  return (
    <Flex direction='column' align='center' width='100%' mt={4}>

    </Flex>
  )
}

export default AuthInputs