import { useState } from "react"

export default function Like(){
    let [isLiked,setisLiked]= useState(false);

    let[count,setcount]= useState(0);
    let toggle=()=>{
      setisLiked(!isLiked);
    }
   
    let onClick=()=>{
        setcount(count+1);
    }
    let styles={color:"yellow"}
    return <div onClick={toggle} style={styles}>
    {isLiked ? (<i className="fa-regular fa-heart"></i>):(<i className="fa-solid fa-heart"></i>)}

      <h4>count:{count}</h4>
   <button onClick={onClick}>increase count</button>
    </div>
}