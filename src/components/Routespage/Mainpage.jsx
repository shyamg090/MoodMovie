import React from "react";
import "./mainpage.scss";

// import Banner from "../Home/Banner";
import Content from "./Content";

const Mainpage = ({ arr }) => {

  return (
    <div className="mainpage">
      <div className="middiv">
        {arr?.map((item, index) => {
          return <Content key={index} item={item} index={index} />;
        })}
      </div>

    </div>
  );
};

export default Mainpage;
