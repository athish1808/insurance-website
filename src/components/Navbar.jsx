import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Navbar,Container,Nav  } from 'react-bootstrap'
function Navbars(){ 

 
  //react-router-dom-->navigate

  const navigate=useNavigate()
  
  return(
   <>
<Navbar fixed='top' style={{backgroundColor:'black',height:'100px'}} variant='dark' expand="lg">
  <Container fluid>
    <img style={{borderRadius:'75%'}} width={60} height={60} src='https://logopond.com/logos/69ca4b4c5e73128a4aeadf4fc801cae2.png'alt='logo'/>
    <Navbar.Brand href="#">INSURANCE</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link  onClick={()=>navigate('/')}>Home</Nav.Link>
          <Nav.Link  onClick={()=>navigate('/About')}>About</Nav.Link>
          <Nav.Link  onClick={()=>navigate('/Types')}>Types</Nav.Link>
        <Nav.Link  onClick={()=>navigate('/contact')}>Contact</Nav.Link>
      </Nav>
     
    </Navbar.Collapse>
  </Container>
  <p style={{color:'white'}}>+91 8678901234</p>
</Navbar>
</>
)}
export default Navbars