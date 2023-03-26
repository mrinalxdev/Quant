import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'

type LoginProps = {}

const Login:React.FC<LoginProps> = () => {
    const [loginFomr, setLoginForm] = useState()

  return (
    <form>
        <Input />
        <Input />
    </form>
  )
}

export default Login