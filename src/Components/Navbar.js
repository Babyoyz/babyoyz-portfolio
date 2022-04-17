import React from 'react'
import '../App.css'


export const Navbar = () => {
  return (
    <div>
        <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn"><span></span></label>
            <label htmlFor="active" className="close"></label>
            <div className="wrapper">
            <ul>
            <li><a className='link-a'>Home</a></li>
            <li><a className='link-a'>About</a></li>
        </ul>
        </div>
    </div>
  )
}
