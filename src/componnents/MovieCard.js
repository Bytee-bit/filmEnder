import React from "react";

export default function MovieCard({movie}){
    return (
    <div className="filmPoster">
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`poster of ${movie.title}`} />
        {/* <div className="playButton">▶️</div> */}
    </div>
    );
}