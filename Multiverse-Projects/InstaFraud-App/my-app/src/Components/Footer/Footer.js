import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IconName } from "react-icons/tfi";
import './FooterStyle.css'

function Footer() {
  const thisYear = new Date().getFullYear()
  return (
        <div className='footer-container'>
            <p className='contact-us'> Contact Us:</p>
            <div className='social'>
              <div className='footer-icons'>
                <a href="https://www.facebook.com/"><FaFacebookF/></a>
                <a href="https://twitter.com/"><FaTwitter/></a>
                <a href="https://www.linkedin.com/"><FaLinkedinIn/></a>
              </div>
            </div>
            <p className = 'copyright'> &copy; {thisYear > 2022 ? `2022-${thisYear}`: thisYear} designed and implemented By Yared Gari ,Keegan Carpenter and Jordan Hornback.</p>
        </div>
  )
}

export default Footer