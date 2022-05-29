import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
  <>
    <div class="footer-basic">
    <footer fixed='bottom' >
        <div className='icon' >
          <center>
    <img style={{borderRadius:'50%',margin:'10px'}} width={100} height={100}  src='https://logopond.com/logos/69ca4b4c5e73128a4aeadf4fc801cae2.png' alt='logo'/>
            <br/>
            </center>
        </div>
        <center>
        <ul class="list-inline">
            <li class="list-inline-item"><a href='/'>Services</a></li>
            <li class="list-inline-item"><a href='/'>About</a></li>
            <li class="list-inline-item"><a href='/'>Terms and Conditions</a></li>
            <li class="list-inline-item"><a href='/'>Privacy Policy</a></li>
        </ul>
        <h1 class="copyright">INSURANCE</h1>
        </center>
    </footer>
    </div>
    


</> )
}

export default Footer