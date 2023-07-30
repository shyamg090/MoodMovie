import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
const github = () => {
  window.open("https://github.com/shyamg090", "_blank");
};
const linkedin = () => {
  window.open("https://www.linkedin.com/in/shyam-g-6712a522b", "_blank");
};
const twitter = () => {
  window.open("https://twitter.com/_Shyam_G", "_blank");
};
const instagram = () => {
  window.open("https://www.instagram.com/shyam_g__/", "_blank");
};

  return (
    <div className="footer">
      <div className="links-logo">
        <BsGithub onClick={()=>github()} />
        <BsLinkedin onClick={()=> linkedin()}  />
        <BsTwitter onClick={()=> twitter()} />
        <BsInstagram onClick={()=> instagram()} />
      </div>
      <div className="about">copyright © Shyam G</div>
    </div>
  );
}

export default Footer