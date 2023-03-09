import React from 'react'
import './page4.css';
import logo26 from './page4-img/s1.png';
import logo27 from './page4-img/r1.png';
import logo28 from './page4-img/s2.png';
import logo29 from './page4-img/r2.png';
import logo30 from './page4-img/s3.png';
import logo31 from './page4-img/r3.png';
import logo32 from './page4-img/s4.png';
import logo33 from './page4-img/r4.png';
import logo34 from './page4-img/s5.png';
import logo35 from './page4-img/r5.png';
import logo36 from './page4-img/s6.png';
import logo37 from './page4-img/r6.png';


function  Page4 ()  {
  return (
    <div className='page4_style'>
      <h1>Features</h1>
      <br></br>
      <div className='row1'>
          <div>
                    <img src={logo26} id="item1" alt="feature1" />
                    <img src={logo27} id="item1s"  />
                    <h2>Email Marketing</h2>
                    <p>A peep at some distant orb has power to <br></br>
                    raise and purify our thoughts like.</p>
          </div>
          <div>
                    <img src={logo28 } id="item2" alt="feature2" />
                    <img src={logo29 } id="item2s" />
                    <h2>User Analytics</h2>
                    <p>A peep at some distant orb has power to<br></br> 
                    raise and purify our thoughts like.</p>
          </div>
          <div>
                    <img src={logo30} id="item3" alt="feature3" />
                    <img src={logo31} id="item3s" />
                    <h2>Security</h2>
                    <p>A peep at some distant orb has power to <br></br> 
                    raise and purify our thoughts like. </p>
          </div>
      </div>
      <div className='row2'>
            <div>
                    <img src={logo32} id="item4" alt="feature4" />
                    <img src={logo33} id="item4s" />
                    <h2>Integrations</h2>
                    <p>A peep at some distant orb has power to <br></br>
                     raise and purify our thoughts like.</p>
           </div>
           <div>
                    <img src={logo34} id="item5" alt="feature5" />
                    <img src={logo35} id="item5s"/>
                    <h2>Community</h2>
                    <p>A peep at some distant orb has power to<br></br>
                     raise and purify our thoughts like.</p>
          </div>
          <div>
                    <img src={logo36} id="item6" alt="feature6" />
                    <img src={logo37} id="item6s" />
                    <h2>Support</h2>
                    <p>A peep at some distant orb has power to <br></br>
                    raise and purify our thoughts like.</p>
          </div>
      </div>
    </div>
  )
}

export default Page4
