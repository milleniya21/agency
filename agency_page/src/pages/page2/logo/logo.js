import React from 'react'
import './logo.css';
import logo8 from './logo-images/atlas.png';
import logo9 from './logo-images/slack.png';
import logo10 from './logo-images/dropbox.png';
import logo11 from './logo-images/shopify.png';
import logo12 from './logo-images/dropbox.png';
function Logo  () {
  return (
    <div className='logo_flex'>
     
       <img src={logo8} id="atlas" alt="brand1" />
       <img src={logo9} id="slack" alt="brand2" />
       <img src={logo10} id="dropbox" alt="brand3" />
       <img src={logo11} id="shopify" alt="brand4" />
       <img src={logo12} id="google" alt="brand5" />
    </div>
  )
}

export default Logo
