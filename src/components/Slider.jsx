import React from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import '../styles/slider.css';
import{Card,Carousel} from 'react-bootstrap'

function Slider() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <div className='row'>
      <div className='card'>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>GENERAL INSURANCE</Card.Title>
    <Card.Text><ul>
      <li><a href='https://www.bajajallianz.com/health-insurance-plans.html'>health insurance plan</a></li>
      <li><a href='https://www.policybazaar.com/motor-insurance/'>motor insurance plan</a></li>
      <li><a href='https://www.policybazaar.com/home-insurance/'>home insurance plan</a></li>
      <li><a href='https://www.policybazaar.com/commercial-insurance/fire-insurance/'>fire insurance plan</a></li>
      <li><a href='https://www.policybazaar.com/travel-insurance/'>travel insurance plan</a></li>
    </ul>
    </Card.Text>
    
  </Card.Body>
</Card>

      </div>
      <div className='card2'>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="ddf"
      src="https://www.valueresearchonline.com/content-assets/images/45966_general_insurance__w1200__.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>GENERAL INSURANCE</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="ddf"
      src="https://cdnblog.etmoney.com/wp-content/uploads/2020/05/Term-Insurance-Plan-in-5-Steps-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>LIFE INSURANCE</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      <div className='card3'>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Life INSURANCE</Card.Title>
    <Card.Text><ul>
      <li><a href='https://www.policybazaar.com/life-insurance/term-insurance/'>term life insurance plan</a></li>
      <li><a href='https://www.policybazaar.com/life-insurance/general-info/articles/whole-life-insurance-policy/'>whole life insurance plan</a></li>
      <li><a href='https://www.policybazaar.com/endowment-policy/'>endowment insurance plan</a></li>
      <li><a href='https://www.policybazaar.com/life-insurance/child-plans/'>child insurance plan</a></li>
      <li><a href='https://licindia.in/Products/Pension-Plans'>pension insurance plan</a></li>
    </ul>
    </Card.Text>
    
  </Card.Body>
</Card>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Slider
