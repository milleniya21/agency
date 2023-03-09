import React from 'react'
import './services.css';
import logo13 from './serv-images/star.png';
import logo14 from './serv-images/pen.png';
import logo15 from './serv-images/forward.png';
function Services  ()  {
  return (
    <div className='row_serv'>
        <div className='col-1'>
                 <img src={logo13} id="star" alt="marketing" />
                 <h2>Marketing</h2>
                 <p>Minuteness of the parts formed a great<br></br>
                  hindrance to my speed</p>
        </div>
        <div className='col-2'>
                <img src={logo14} id="pen" alt="design" />
                <h2>Design</h2>
                 <p>Formed a great hindrance to my speed, <br></br>
                 contrary to my first</p>
        </div>
        <div className='col-3'>
                <img src={logo15} id="forward" alt="development" />
                <h2>Development</h2>
                 <p>Great hindrance to my speed resolved, <br></br>
                 contrary to my first intention</p>
        </div>
    </div>
  )
}

export default Services
