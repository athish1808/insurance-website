import React from 'react'
import '../styles/contact.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {Form} from 'react-bootstrap'

function Contact() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <div className='register'>
        <h1>REGISTER BELOW FOR MORE INSURANCE UPDATES</h1>
        <div className='container'>
          <center>
            <h3>Register HERE!</h3>
            <Form>
  <Form.Group className="mb-3" controlId="fname">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="fname" placeholder="Enter your FirstName" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="lname">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="lname" placeholder="Enter your LastName" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="number">
    <Form.Label>phone number</Form.Label>
    <Form.Control type="number" placeholder="Enter your PhoneNumber" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="By submitting this form i agree that ill get all notifications abouts the INSURANCE through phone or Email" />
  </Form.Group>
  <button className='btn' variant="primary" type="submit" onClick={(event)=>{ alert('Thanks for Registration') }}>Submit</button>
  
</Form>
          </center>
        </div>
     </div>
     </div>
     
  )
}

export default Contact