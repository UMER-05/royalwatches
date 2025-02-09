import logo from './logo.png'
import './Nav.css'
function Nav() {

    return (
      <>
      <div className='logoWrapper'>
        <img src={logo} className='logo'/>
        <h1 className='logonametext'>Royal Watches</h1>
        </div>
      </>
    )
  }
  
  export default Nav