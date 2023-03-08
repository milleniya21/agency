import React from 'react'
import './menu.css';

function Menu () {
  return (
    <div className='menu_style'>
      <h1>AGNC</h1>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Cases</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <button id ='btn-menu'>Contact Us</button>
    </div>
  )
}

export default Menu
