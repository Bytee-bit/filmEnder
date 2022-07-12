import React from "react";
import { Button } from "./button";
import MovieCard from "./MovieCard";

export default function RecommendFilm({movie, likedMovie, randomMovie}){
    if(movie.id === undefined) return;   // just bad way to check 

    return (
        <div className="filmDisplay">
            <h2>Recommended Films_</h2>
            <div className="filmContainer">
                <MovieCard movie={movie}/>
                <div className="filmIntro">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <div className="filmCast">
                        {/* map casts */}
                    </div>
                </div>
            </div>
            <div className="buttonContainer">
                <Button type = {"like"} movie={movie} likedMovie={likedMovie} randomMovie={randomMovie}/>
                <Button type = {"dislike"} randomMovie = {randomMovie}/>
            </div>
        </div>
    );
}