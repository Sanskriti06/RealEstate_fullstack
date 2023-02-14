import React from 'react';
// import { footer } from "./data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <br></br>
                {/* <button>Subscribe</button> */}
              </div>
              <br />
              <button className='footersubs'>Subscribe</button>
            </div>
          </div>
          <br />
        </div>
      </footer>
      <div className='legal'>
        <span>DreamVilla.</span>
      </div>
    </>
  )
}

export default Footer