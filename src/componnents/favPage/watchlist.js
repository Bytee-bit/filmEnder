import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../MovieCard";

export default function Watchlist(){
    const routeState = useLocation().state;
    const likedMovies = routeState.likedMovies;
    const [s, setS] = useState(0);    //start for corosel
    
    let arr = []; 
    if(likedMovies === undefined) return;
     //handle less then corousal size
     if(likedMovies.length < 4){
        arr = likedMovies;
     }else{
        for(let i=s; i<s+4; i++){
            arr.push(likedMovies[i]);
        }
     }
                
    
    const handleAdd = ()=>{
        setS(prev => {
            if(prev+4 >= likedMovies.length) return prev;
            return prev+1;
        });
    }
    const handleSub = ()=>{
        setS(prev => {
            if(prev <= 0) return prev;
            return prev-1;
        });
    }
    return (
        <div className="watchlistContainer">
            <h3>Liked movies_</h3>
            
            <div className="likedMovieContainer">
                {
                    arr.length < 4? "" : <button onClick={handleSub}>-</button>
                }
                {
                    arr.map(movie => <MovieCard movie={movie} key={movie.id}/>)
                }
                {
                    arr.length < 4? "" : <button onClick={handleAdd}>+</button>
                }
                
            </div>
            <h3>upcomming movies</h3>
            <div className="likedMovieContainer">
                {
                    likedMovies.map(movie => <MovieCard movie={movie} key={movie.id}/>)
                }
            </div>
        </div>
    );
}