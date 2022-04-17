import React from 'react'
import '../App.css'

export const Navbar = () => {
  return (
    <div>
           <input type="checkbox" id="active" />
            <label for="active" class="menu-btn"><span></span></label>
            <label for="active" class="close"></label>
            <div class="wrapper">
            <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Feedback</a></li>
        </ul>
        </div>
    </div>
  )
}
