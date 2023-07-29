import React from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div>
        <div className="link1">
          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
        </div>
        <div className="link2">
          <Link to="/trending">Trending</Link>
          <Link to="/moodbing">Mood Bing</Link>
        </div>
      </div>

      {/* <BsSearch /> */}
    </nav>
  );
};

export default Header;
