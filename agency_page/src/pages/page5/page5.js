import React from 'react'
import './page5.css';

import logo38 from './img/firstcard/Bitmap.png';
import logo39 from './img/firstcard/Rectangle.png';
import logo40 from './img/firstcard/Shape.png';
import logo41 from './img/firstcard/Webdesign.png';
import logo42 from './img/firstcard/Almostlanding.png';
import logo43 from './img/Bitmap2.png';
import logo44 from './img/Bitmap3.png';
import logo45 from './img/Bitmap4.png';
import logo46 from './img/Bitmap5.png';
import logo47 from './img/Bitmap6.png';


function  Page5 ()  {
  return (
    <div className='page5_style'>
       <div className='rowa'> 
            <h1>Portfolio</h1>
            <p>Apparently we had reached a great height in the atmosphere, for the sky <br></br>
            was a dead black, and the stars had ceased to twinkle.</p>
       </div>
      <div className='rowb'>
          <div>
                    <img src={logo38} id="b1" />
                    <img src={logo39} id="b2"  />   
                    <img src={logo40} id="b3"  />
                    <img src={logo41} id="b4"  />
                    <img src={logo42} id="b5"  />
          </div>
          <img src={logo43} id="b6"  />
          <img src={logo44} id="b7"  />
          
      </div>
      <div className='rowc'>
                <img src={logo45} id="b8"  />   
                <img src={logo46} id="b9"  />
                <img src={logo47} id="b10"  /> 
          
          
      </div>
      <div >
         <button id="btn_explore">Explore All</button>
      </div>
    </div>
  )
}

export default Page5
