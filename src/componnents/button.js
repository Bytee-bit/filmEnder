import React from "react";


export const Button = ({type})=>{

    if(type === "like"){
        return (
            <button className="likeButton" style={{backgroundColor:"green", fontSize: 32}}>👍</button>
        );
    }else{
        return (
            <button className="likeButton" style={{backgroundColor:"red", fontSize:32}}>👎</button>
        );
    }
    
}