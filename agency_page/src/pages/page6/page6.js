import React from 'react'
import './page6.css';
import logo48 from './page6_img/a.png';
import logo49 from './page6_img/b.png';
import logo50 from './page6_img/c.png';
import logo51 from './page6_img/d.png';
import logo52 from './page6_img/e.png';

import logo53 from './page6_img/logo-images/atlas.png';
import logo54 from './page6_img/logo-images/slack.png';
import logo55 from './page6_img/logo-images/dropbox.png';
import logo56 from './page6_img/logo-images/shopify.png';
import logo57 from './page6_img/logo-images/google.png';


function Page6  () {
  return (
    <div className='page6_style'>
        <div className='page_maincontent'>
            <div className='page6_title'>
               <h1>Testimonials</h1>
               <p>
               Though the gravity still dragged at him, his muscles were making great 
               efforts to adjust. After the daily <br></br>
                classes he no longer collapsed immediately into bed. Only the nightmares got worse.
               </p>
               <br></br>
               <br></br>
               <br></br>
               <hr></hr>
               <h4>"What looked like a small patch of purple grass, above five feet square, was moving across the sand in <br></br>
                their direction. When it came near enough he perceived that it was not grass there were no blades, but<br></br>
                 only purple roots. The roots were revolving, like the spokes of a rimless wheel."</h4>
                 <h2>Alicia Puma</h2>
                 <p id ="p_pos">Digital Director, Microsoft</p>
               </div>
               <div className='page6_img'>
               <img src={logo48} id="p6a"  /> 
               <img src={logo49} id="p6b"  /> 
               <img src={logo50} id="p6c"  /> 
               <img src={logo51} id="p6d"  /> 
               <img src={logo52} id="p6e"  /> 

               </div>
               
               <div className='page6_logo'>
               <img src={logo53} id="p6f"  /> 
               <img src={logo54} id="p6g"  /> 
               <img src={logo55} id="p6h"  /> 
               <img src={logo56} id="p6i"  /> 
               <img src={logo57} id="p6j"  /> 

               </div>
        </div>
      
    </div>
  )
}

export default Page6
