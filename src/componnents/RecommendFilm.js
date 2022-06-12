import React from "react";
import { Button } from "./button";

export default function RecommendFilm({movie}){
    if(movie.id === undefined) return;   // just bad way to check 
    console.log(movie);
    return (
        <div className="filmDisplay">
            <h2>Recommended Films_</h2>
            <div className="filmContainer">
                <div className="filmPoster">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`poster of ${movie.title}`} />
                    {/* <div className="playButton">▶️</div> */}
                </div>
                <div className="filmIntro">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <div className="filmCast">
                        {/* map casts */}
                    </div>
                </div>
            </div>
            <div className="buttonContainer">
                <Button type = {"like"}/>
                <Button type = {"dislike"}/>
            </div>
        </div>
    );
}