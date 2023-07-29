import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {

  return (
    <div className="footer">
      <div className="links-logo">
        <BsGithub href="https://github.com/shyamg090"  target='_blank' />
        <BsLinkedin href="https://www.linkedin.com/in/shyam-g-6712a522b" target='_blank'  />
        <BsTwitter href="https://twitter.com/_Shyam_G"  target='_blank' />
        <BsInstagram href="https://www.instagram.com/shyam_g__/"  target='_blank' />
      </div>
      <div className="about">copyright © Shyam G</div>
    </div>
  );
}

export default Footer