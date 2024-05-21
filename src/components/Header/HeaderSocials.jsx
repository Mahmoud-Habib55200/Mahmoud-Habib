import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='headr__socials'>
        <a href="https://www.linkedin.com" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/Mahmoud-Habib55200" target="_blank"> <FaGithub/> </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> <FaFacebook /></a>
    </div>
  )
 
}

export default HeaderSocials