import React, {useState, useEffect} from "react";
import RecommendFilm from "./RecommendFilm";
import SearchFilm from "./SerachFilm";
const tmdbKey = '79d20fcb7463d523581f3641762c2b56';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
export default function App(){
    const [genre, setGenre] = useState('');
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});

    const selectedGenre = (genre)=>{
        setGenre(genre);
    }

    const randomMovie = ()=>{
        const idx = Math.floor(Math.random() * movies.length);
        console.log(movies[idx]);
        setMovie(movies[idx]);
    }
    useEffect(()=>{
        
        const getMovies = async ()=>{
            const discoverMovieEndpoint = '/discover/movie';
            const requestParams = `?api_key=${tmdbKey}&with_genres=${genre}`;
            const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
            try{
                const response = await fetch(urlToFetch);
                if(response.ok){
                    const jsonResponse = await response.json();
                    setMovies(jsonResponse.results);
                    console.log(jsonResponse.results)
                }
            }catch(error){
                console.log(error);
            }
        }
        getMovies();
        
    },[genre])


    return(
        <main className="appContainer">
            <h1>🍿Film/ENDER🍿</h1>
            <SearchFilm selectGenre = {selectedGenre} randomMovie = {randomMovie}/>
            <RecommendFilm movie = {movie}/>
        </main>
    );
}