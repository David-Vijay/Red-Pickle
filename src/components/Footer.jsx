import { Instagram,Facebook,Twitter, RssFeed } from "@mui/icons-material"
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <li><Instagram htmlColor="tomato"/></li>
        <li><Facebook htmlColor="blue"/></li>
        <li><Twitter htmlColor="cyan"/></li>
        <li><RssFeed htmlColor="green"/></li>
      </div>
      <div className="store">
        <div className="about">
            <h2><u>Our Store</u></h2>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy & Policy</li>
        </div>
        <div className="contact">
            <h2><u>Contact Us</u></h2>
            <li>+917893405285</li>
            <li>davidvijayg@gmail.com</li>
            <li>Ecospace</li>
            <li>Bangalore, Karnataka</li>
        </div>
        
      </div>
      
      <div style={{marginBottom:'20px',marginTop:'20px'}}>&copy;{new Date().getFullYear()} RedPickles. All rights Reserved.</div>
    </div>
  )
}

export default Footer
