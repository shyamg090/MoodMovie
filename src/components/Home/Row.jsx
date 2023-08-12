import React from 'react';
import Card from "./Card";
import "./Home.scss";

const Row = ({title , arr , datatype}) => {
  // console.log(key);
  return (
    <div className="row">

      <h1>{}</h1>
      <h1>{ title ? title : "loading"}</h1>
      
      <div>
      { 
       arr.map((item)=>{
        // console.log(item);
        return <Card key={item.id} img={item?.poster_path} movId={item.id} datatype={datatype} />
        ;
        })
      }
      </div>
    </div>
  );
}

export default Row