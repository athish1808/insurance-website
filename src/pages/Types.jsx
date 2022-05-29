import React from 'react'
import { Table } from 'react-bootstrap'
import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Branches() {
  
  return (
    <>
    <Navbar/>
    <div className='menu'>
      <h1>GENERAL INSURANCE</h1>
    <Table striped bordered hover variant='dark'>
  <thead>
    <tr>
      <th>S.no</th>
      <th>TYPES OF INSURANCE</th>
      <th>USES OF INSURANCE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>HEALTH INSURANCE</td>
      <td>Health insurance is a type of insurance coverage that pays for health and medical expenses. Health insurance covers some or all of the costs of routine care, emergency care, and treatment for chronic illnesses</td>
    </tr>
    <tr>
      <td>2</td>
      <td>MOTOR INSURANCE</td>
      <td>Motor insurance is a unique insurance policy meant for vehicle owners to protect them from incurring any financial losses that may arise due to damage or theft of the vehicle. Whether you have a private car, a commercial vehicle, or a two-wheeler, you can purchase a motor insurance policy</td>
    </tr>
    <tr>
      <td>3</td>
      <td>HOME INSURANCE</td>
      <td>Home insurance is an insurance policy that covers the costs and damage to your home or any insured property. It is a form of property insurance and one of the several types of general insurance products.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>FIRE INSURANCE</td>
      <td>Fire insurance, provision against losses caused by fire, lightning, and the removal of property from premises endangered by fire. The insurer agrees, for a fee, to reimburse the insured in the event of such an occurrence.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>TRAVEL INSURANCE</td>
      <td>Travel Insurance is a type of insurance that covers different risks while travelling. It covers medical expenses, lost luggage, flight cancellations, and other losses that a traveller can incur while travelling. Travel Insurance is usually taken from the day of travel till the time the traveller reaches back to India.</td>
    </tr>
  </tbody>
</Table>
      
    </div>
    <div className='menu'>
      <h1>LIFE INSURANCE</h1>
      <Table striped bordered hover variant='dark'>
  <thead>
    <tr>
      <th>S.no</th>
      <th>TYPES OF INSURANCE</th>
      <th>USES OF INSURANCE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>TERM LIFE INSURANCE</td>
      <td>A term life insurance policy is the simplest, purest form of life insurance: You pay a premium for a period of time typically between 10 and 30 years and if you die during that time a cash benefit is paid to your family</td>
    </tr>
    <tr>
      <td>2</td>
      <td>WHOLE LIFE INSURANCE</td>
      <td>Whole life insurance is a type of permanent life insurance, which means the insured person is covered for the duration of their life as long as premiums are paid on time.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>ENDOWMENT PLAN</td>
      <td>An endowment policy is essentially a life insurance policy which, apart from covering the life of the insured, helps the policyholder save regularly over a specific period of time so that he/she is able to get a lump sum amount on the policy maturity in case he/she survives the policy term</td>
    </tr>
    <tr>
      <td>4</td>
      <td>CHILD PLAN</td>
      <td>Child insurance plan is an investment cum insurance plan from life insurance companies, which offers financial safety to your child's dreams and goals. You can use a child insurance plan to invest in the big life goals of your child like higher education and marriage</td>
    </tr>
    <tr>
      <td>5</td>
      <td>PENSION PLAN</td>
      <td>A pension plan is the retirement amount, which an individual gets from their insurance companies on a. There are various types of such plans available in the country offered by various companies. However, increased choices may confuse and person and make it difficult for individuals to choose one which works the best.</td>
    </tr>
  </tbody>
</Table>
    </div>

    
    <Footer/>    
    </>
  )
}

export default Branches