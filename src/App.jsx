import { useState } from 'react'
import SignUp from './components/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return <SignUp />
}

export default App
