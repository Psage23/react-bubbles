import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {axiosWithAuth} from "./Utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

useEffect(() => {
  axiosWithAuth().get("/colors")
    .then(res => {
      setColorList(res.data);
    })
    .catch(err => console.log(err));
}, []);


  return (
    <>
      <Link to="/" className="btn">Exit</Link>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
