import React from "react";


export const Button = ({type, likedMovie, movie, randomMovie})=>{
    const handleLike = (movie)=>{
        likedMovie(movie);
    }
    const randomMovieHandler = ()=>{
        randomMovie();
    }

    if(type === "like"){
        return (
            <button className="likeButton" 
            style={{backgroundColor:"green", fontSize: 32}}
            onClick={()=> likedMovie(movie)}>👍</button>
        );
    }else{
        return (
            <button className="likeButton" 
            style={{backgroundColor:"red", fontSize:32}}
            onClick={randomMovieHandler}>👎</button>
        );
    }
    
}