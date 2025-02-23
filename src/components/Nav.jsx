import { Link } from 'react-router-dom'
import '../components/Nav.css'
import { SearchRounded, ShoppingCart,AccountCircle,MenuRounded} from '@mui/icons-material'
import logo from '../assets/icon.jpg'
import { useState } from 'react'
function Nav({toggle,cart}) {
   const [menu,setMenu] = useState(false)
   const menuVisible=()=>{setMenu(!menu)
   
   }
  return (
    <div className="container">
        <div className="leftitems">
            <img src={logo} alt="" style={{width:'50px',height:'50px', borderRadius:'10px'}}/>
        </div>
        <div className={`middle ${menu ? 'visible' : ''}`}>
            <ul>
                <li><Link to='/' className='links' onClick={menuVisible}>Home</Link></li>
                <li><Link to='/pickles' className='links' onClick={menuVisible}>Pickles</Link></li>
                <li><Link to='/about' className='links' onClick={menuVisible}>About</Link></li>
                <li><Link to='/contact' className='links' onClick={menuVisible}>Contact</Link></li>
            </ul>
        </div>
        <div className="rightitems">
            <ul>
                <li><SearchRounded onClick={toggle}/></li>
                <li className='cart-item'><Link to='/cart' className='cartIcon'><ShoppingCart/><span className='cart-count'>{cart<1?0:cart}</span></Link></li>
                <li><AccountCircle/></li>
                <li className='burger' onClick={menuVisible}><MenuRounded/></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
