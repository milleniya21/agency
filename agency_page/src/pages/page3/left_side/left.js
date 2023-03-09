import React from 'react'
import './left.css';
import logo16 from './left-images/Oval-out.png';
import logo17 from './left-images/Oval-in.png';
import logo18 from './left-images/pic.png';
import logo19 from './left-images/man.png';

function Left  ()  {
  return (
    <div>
      <img src={logo16} id="oval-out" alt="border" />
      <img src={logo17} id="oval-in" alt="inner border " />
      <img src={logo18} id="center-pic" alt="design image" />
      <img src={logo19} id="men-pic" alt="men pic " />
    </div>
  )
}

export default Left
