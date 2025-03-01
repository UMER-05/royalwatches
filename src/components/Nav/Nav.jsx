import { useState } from 'react'
import logo from './logo.png'
import './Nav.css'
import mycart from '/src/assets/MyCart.png';
export default function Nav() {
const  [open, setOpen]=useState(false);
    return (
      <>
      
      <div className='menu-btn-wrapper'>
      <img src={mycart} className='mycartlogo' alt='My cart img'/>
        <button  className='menu-btn' onClick={() =>setOpen(!open)}>{ <div className='btn-lines-wrapper'> <div></div>  <div></div>  <div></div></div> }</button>
        {open && <MenuOpen/>}
        </div>
      <div className='logoWrapper'>
        <img src={logo} className='logo' alt='logo'/>
        <h1 className='logonametext'>Royal Watches</h1>
        </div>
        
      </> 
    )
  }
function MenuOpen() {

    return (
      <div className='menu'>
       <ul>
        <li>Home</li>
        <li>Poducts</li>
        <li>Cart</li>
        <li>Privacy Policy</li>
        <li>About Us</li>
       </ul>
        </div>
    )
  }
  
  