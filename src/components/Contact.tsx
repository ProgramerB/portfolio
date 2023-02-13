import React from 'react'
import {FaInstagram, FaLinkedin} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="main">
      <div className='title'>
        Get in touch
      </div>
      <a className='contacts' href='https://www.linkedin.com/in/divya-dhanshekhar-nadar/' target='_blank' rel="noopener noreferrer"><FaInstagram /> Instagram</a>
      <a className='contacts' href='https://www.linkedin.com/in/divya-dhanshekhar-nadar/' target='_blank' rel="noopener noreferrer"><FaLinkedin /> Linkedin</a>
      <div className='paragraph'>
        or mail at xyz@xyz.com 
      </div>
    </div>
  )
}

export default Contact
