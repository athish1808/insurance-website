import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/about.css';
function About() {
  return (
    <div>
      
      <Navbar/>
      <div className='about'>
        <h3>In life, any unexpected situation can disrupt your family's well-being. For such scenarios, different types of life, health and general insurance policies are available in India that offer comprehensive financial protection to your loved ones and yourself. At the same time, you can opt for an insurance cover to protect your assets and property. However, before purchasing an insurance policy, it is imperative to understand the different types of insurance policies and then choose the ones that align with your needs.</h3>
        <h1>Insurance Types You Should Know </h1>
        <center><img style={{borderRadius:'0%'}} width={180} height={180} src='https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt=''/></center>
        <h3>Insurance is a legal agreement between an individual and the insurance company, under which, the insurer promises to provide financial coverage (Sum assured) against contingencies for an amount (premium). The types of insurance in India can be broadly divided into two categories:</h3>
        <center><ul>
          <li>general insurance</li>
          <li>life insurance</li>
        </ul></center>
        <h1>General Insurance</h1>
        <center><img style={{borderRadius:'0%'}} width={180} height={180} src='https://www.pinclipart.com/picdir/middle/15-159766_health-general-insurance-png-clipart.png'alt=''/></center>

        <h3>General insurance policies are one of the types of insurance that offer coverage in the form of sum assured against the losses incurred other than the death of the policyholder. Overall, general insurance comprises different types of insurance policy that offer financial protection against losses incurred due to liabilities such as bike, car, home, health, and similar. These various general insurance types of insurance policies include: </h3>
        <center><ul>
          <li>Health Insurance</li>
          <li>Motor Insurance</li>
          <li>Home Insurance</li>
          <li>Fire Insurance</li>
          <li>Travel Insurance</li>
        </ul></center>
        <h1>Life Insurance</h1>
        <center><img style={{borderRadius:'0%'}} width={180} height={180} src='https://napkinfinance.com/wp-content/uploads/2016/08/lifeinsurance.jpg'alt=''/></center>

        <h3>Life insurance plans offer coverage against unfortunate events like death or disability of the policyholder. Besides financial protection, there are various types of life insurance policies that allow the policyholders to maximize their savings through regular contributions into different equity and debt fund options.

You can choose a life insurance policy to secure your family's financial future against life's uncertainties. The policy coverage comprises of a large amount, which is payable to your loved ones if anything happens to you. With this insurance type, you have the flexibility to choose the life insurance policy period, coverage amount, and payout option based on the financial requirements. Different types of life insurance policy are as follows:</h3>
        <center><ul>
          <li>Term Life Insurance</li>
          <li>Whole Life Insurance</li>
          <li>Endowment Plans</li>
          <li>Unit-Linked Insurance Plans</li>
          <li>Child Plans</li>
          <li>Pension Plans</li>
        </ul></center>
      </div>

     
    <Footer/>
      

    </div>
    
  )
}

export default About