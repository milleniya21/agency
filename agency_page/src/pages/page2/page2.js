import React from 'react'
import './page2.css';

import Logo from './logo/logo'
import Header from './header/header';
import Services from './services/services';

function Page2 ()  {
  return (
    <div className='page2_style'>
       <Logo/>
       <Header/>
       <Services/>
    </div>
  )
}

export default Page2
