import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SignUp from './components/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
  
    <Container className="d-flex items-center justify-center min-h-screen">
      <div className="w-100 max-w-[400px]">
        <SignUp />
      </div>
    </Container>
  )
}

export default App
