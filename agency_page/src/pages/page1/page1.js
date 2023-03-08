import React from 'react'
import './page1.css';
import Menu from './menu/menu'
import Title from './title/title';
import Right from './right/right';

function Page1 () {
  return (
    <div className='page1_style'>
      <Menu/>
      <div className='align-section1'>
      <Title/>
      <Right/>
      </div>
    </div>
  )
}

export default Page1
