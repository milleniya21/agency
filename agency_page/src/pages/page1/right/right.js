import React from 'react'
import './right.css';
import logo1 from './right-images/Oval-outer.png';
import logo2 from './right-images/Oval-inner.png';
import logo3 from './right-images/pic.png';
import logo4 from './right-images/man.png';
import logo5 from './right-images/icon-orange.png';
import logo6 from './right-images/women.png';
import logo7 from './right-images/icon-blue.png';
// import logo1 from './white.jpg';
function Right () {
  return (
    <div className='right_style'>
       <img src={logo1} id="oval-outer" alt="oval" />
       <img src={logo2} id="oval-inner" alt="ovali" /> 
       <img src={logo3} id="mid-pic" alt="pic" />
       <img src={logo4} id="top-man" alt="man" />
       <img src={logo5} id="top-icon" alt="icon1" />
       <img src={logo6} id="bottom-women" alt="women" />
       <img src={logo7} id="bottom-icon" alt="icon2" />

    </div>
  )
}

export default Right

