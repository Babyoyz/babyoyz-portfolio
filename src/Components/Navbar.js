import React from 'react'
import '../App.css'

export const Navbar = () => {

    const clicknav = () => {

        document.querySelector('#active').click()
    }
  return (
    <div>
        <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn"><span></span></label>
            <label htmlFor="active" className="close"></label>
            <div className="wrapper">
            <ul>
            <li onClick={clicknav}><a className='link-a' href="https://www.facebook.com/oilza600/">FaceBook</a></li>
        </ul>
        </div>
    </div>
  )
}
