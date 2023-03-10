import { Button, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

import BudgetCard from './components/BudgetCard'



function App() {

  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h2 className="me-auto">Budgets</h2>
        <Button variant="secondary">Add Budget</Button>
        <Button variant="outline-secondary">Add Expense</Button>
      </Stack>
      <div style={{display:"grid", 
        gridTemplateColumns:"repeat(auto-fill,minmax(300px, 1fr))", 
        gap :"1rem", 
        alignItems:"items-start",
       }}>
        <BudgetCard name="Entertainment" amount={200} max={1000}/>
      </div>
    </Container>
  )
}

export default App
