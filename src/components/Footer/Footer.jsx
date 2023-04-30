import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
    <footer>
<a href="#" className="footer__logo">HABIB</a>

<ul className="permalinks">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Experience</a></li>
  <li><a href="#">Servieces</a></li>
  <li><a href="#">Portfolio</a></li>
  <li><a href="#">Testimonials</a></li>
  <li><a href="#">Contact</a></li>
  
</ul>

<div className="footer__socials">
  <a href="https://www.facebook.com/noor.habib.39545/"><FaFacebookF /></a>
  <a href="https://www.instagram.com/mahmoudhabib1055/"><FiInstagram /></a>
  <a href="/"><IoLogoTwitter /></a>
</div>

<div className="footer__copyright">
  <small>&copy; HABIB Tutorials. All Rights Reserved</small>
</div>
    </footer>
  )
}

export default Footer