import React, {useState, useEffect} from "react";
const tmdbKey = '79d20fcb7463d523581f3641762c2b56';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

export default function SearchFilm({selectGenre, randomMovie}){
    //local states
    const [searchTerm, setSearchTerm] = useState('');
    const [genres, setGenres] = useState([]);

    const handleRandomMovi = ()=>{
        randomMovie();
    }
    const handleChange = ({target})=>{
        setSearchTerm(target.value);
        
    }
    useEffect(()=>{
        selectGenre(searchTerm)
    });

    useEffect(()=>{
        const getGenres = async ()=>{
            const genreRequestEndpoint = '/genre/movie/list';
            const requestParams = `?api_key=${tmdbKey}`;
            const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
            try{
                const response = await fetch(urlToFetch);
                if(response.ok){
                    const jsonResponse = await response.json();
                    setGenres(jsonResponse.genres)
                }
            }catch(error){
                console.log(error)
            }
        }
        getGenres();
    },[]);

    return(
        <div>
            <h2>Randomly recommended 🍿Film 
                <br/>From different <span className="gen">Geners</span>
            </h2>
            <div className="selectGenContainer">
                <select className="selectGener" onChange={handleChange}>
                    {
                        genres.map(genre => (<option key={genre.id} value={genre.id} name={genre.name}>{genre.name}</option>))
                    }
                </select>
                <button onClick={handleRandomMovi}>Play!</button>
            </div>

        </div>
    );
}