import React from 'react'
import './page7.css';
import logo58 from './page7_img/m1.png';
import logo59 from './page7_img/l1.png';
import logo60 from './page7_img/m2.png';
import logo61 from './page7_img/l2.png';
import logo62 from './page7_img/m3.png';
import logo63 from './page7_img/l3.png';
import logo64 from './page7_img/pins.png';


function Page7 () {
  return (
    <div className='page7_style'>
       <div className='page7_title'>
        <h1>Our Team</h1>
        <p>Apparently we had reached a great height in the atmosphere, for the sky <br></br> 
            was a dead black, and the stars had ceased to twinkle.</p>
       </div>
       <div className='page7_main'>
            <div>
               <img src={logo58} id="p7a"  /> 
               <img src={logo59} id="p7b"  /> 
              <h2>Hugo Saavedra</h2>
              <p>Developer</p>
            </div>
            <div>
              <img src={logo60} id="p7c"  /> 
              <img src={logo61} id="p7d"  /> 
              <h2>Angu Tamba</h2>
              <p>Manager</p>
            </div>
            <div>
              <img src={logo62} id="p7e"  /> 
              <img src={logo63} id="p7f"  /> 
              <h2>Oka Tomoaki</h2>
              <p>Designer</p>
            </div>
       </div>
       <img src={logo64} id="pin"  /> 
       <div className='page7_title'>
        <h1>Our Blog</h1>
        <p>Apparently we had reached a great height in the atmosphere, for the sky<br></br>
           was a dead black, and the stars had ceased to twinkle.</p>
       </div>
    </div>
  )
}

export default Page7
