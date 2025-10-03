import { useState } from "react";
import "./Card.css";
function Card(props){
    let [count,setCount]=useState(0);
    let handleClick=()=>{
        setCount(count+=1);
    }

    return(
        <div className="card">
            <h2 style={{fontWeight:"bold"}}>{props.text}</h2>
            <img style={{width:"200px",height:"180px" ,marginLeft:"40px" , marginTop:"20px"}} src={props.image}></img>
            <div className="counter">
                <h3>{count}</h3>
                <button style={{width:"100px", height:"33px",borderRadius:"15px" , backgroundColor:"lightblue", textAlign:"center", fontWeight:"bold", border:"0.5px solid grey",cursor:"pointer"}} onClick={handleClick}>Add</button>
            </div>
        </div>
    );

}
export default Card;