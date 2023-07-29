import React from 'react';
import Card from "./Card";
import "./Home.scss";

const Row = ({title , arr}) => {
  // console.log(key);
  return (
    <div className="row">

      <h1>{}</h1>
      <h1>{ title ? title : "loading"}</h1>
      
      <div>
      { 
       arr.map((item)=>{
        // console.log(item.id);
        return <Card key={item.id} img={item?.poster_path} />
        ;
        })
      }
      </div>
    </div>
  );
}

export default Row