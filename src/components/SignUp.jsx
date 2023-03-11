import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

  return (
    <>
        <Card className="border-4 border-white">
            <Card.Body>
                <h2 className="text-center mb-4 ">Sign In</h2>

                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required className="border-2 border-white rounded-md"/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} className="border-2 border-white rounded-md" required />
                    </Form.Group>

                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmationRef} required className="border-2 border-white rounded-md"/>
                    </Form.Group>
                    <button type="submit" className="w-100 duration-150 ease-in-out hover:bg-green-600 p-2 rounded-xl mt-4 bg-green-500 text-black">Sign Up</button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already Have an account? Log In
        </div>
    
    </>
  )
}

export default SignUp