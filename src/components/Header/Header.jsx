import React, { useRef } from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import {TfiAlignJustify} from "react-icons/tfi"
import { BiX } from "react-icons/bi";
// import { BsSearch } from "react-icons/bs";

const Header = () => {
  const navbarRef= useRef();

  const navbarShowFun = ()=>{
    navbarRef.current.classList.toggle("navbar-toggle");
  }

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div ref={navbarRef} className="headerLinks navshow">
        <Link className="homelink" onClick={()=>navbarShowFun()}  to="/">Home</Link>
        <Link onClick={()=>navbarShowFun()}  to="/tvshows">Tv</Link>
        <Link onClick={()=>navbarShowFun()}  to="/movies">Movies</Link>
        <Link onClick={()=>navbarShowFun()}  to="/trending">Trending</Link>
        <Link onClick={()=>navbarShowFun()}  to="/moodbing">Bing</Link>
        <button onClick={()=>navbarShowFun()} className="btn-show">
          <BiX />
        </button>
      </div>
      <button onClick={()=>navbarShowFun()} className="btn">
        <TfiAlignJustify />
      </button>
    </div>
  );
};

export default Header;
