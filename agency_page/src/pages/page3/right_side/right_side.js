import React from 'react'
import './right_side.css';
import logo20 from './rgt-img/bullet.png';
import logo21 from './rgt-img/tick.png';
import logo22 from './rgt-img/bullet.png';
import logo23 from './rgt-img/tick.png';
import logo24 from './rgt-img/bullet.png';
import logo25 from './rgt-img/tick.png';


function Right_side  ()  {
  return (
    <div className='style-rgt'>
        <h2>We had left the<br></br> ground</h2>
        <p>
        I shall see the face of Mars, anyhow, and that will be a rare experience. It<br></br>
         seems to me that a view of the heavenly bodies through a fine telescope, as <br></br>
          well as a tour round the world, should form a part of a liberal education.<br></br>
        </p>          
            <p>
                <img src={logo20} id="round1" alt="bullet1" />
                <img src={logo21} id="tick1" alt=" tick1" />
                Truly it was a great journey
            </p>
      
            <p>
                <img src={logo22} id="round2" alt="bullet2" />
                <img src={logo23} id="tick2" alt="tick2 " />
                 And in it I met with many
            </p>
      
            <p>
                <img src={logo24} id="round3" alt="bullet3 " />
                <img src={logo25} id="tick3" alt="tick3" />
                Whom to know was to love
            </p>
        <button id ="btn_explore ">Explore </button>
    </div>
  )
}

export default Right_side
