import { useState } from "react"

export default function Likebutton(){
   let [Likebutton,setLikebutton]= useState(false);
  let toggleLike=()=>{
   setLikebutton(!Likebutton);
  };
  let Styles={color:"red"};
   return <div>
      <h2 onClick={toggleLike} style={Styles}>
        {Likebutton ? (<i className="fa-regular fa-heart"></i>):(<i className="fa-solid fa-heart"></i>)}
      </h2>
   </div>

}