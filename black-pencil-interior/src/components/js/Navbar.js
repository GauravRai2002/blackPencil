import React from 'react'
import '../css/navbar.css'

function Navbar() {
  return (
    <>
      <div className='nav-main'>
        <div className='nav-menu'>
          <ul className='nav-menu-list ul'>
            <li className='nav-menu-list-item li'> <a href='' className='link nav-link'>Home </a> </li>
            <li className='nav-menu-list-item li'> <a href='' className='link nav-link'>About </a> </li>
            <li className='nav-menu-list-item li'> <a href='' className='link nav-link'>Contact </a> </li>
          </ul>
        </div>
        <div className='nav-logo'>
          <img src='' alt='BlakPencilInterior'/>
        </div>
        <div className='nav-contact'>
          <ul className='nav-contact-list ul'>
            <li className='nav-contact-list-item li'> <a href='' className='link nav-link'>email@email.com </a> </li>
            <li className='nav-contact-list-item li'> <a href='' className='link nav-link'> 0123 456 789 </a> </li>
            <li className='nav-contact-list-item li'> <a href='' className='link nav-link'> get a quote </a> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar