import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from './axios'
import './Row.css'
import movieTrailer from 'movie-trailer'
//default then we can name it as we want but if its not default then we have to import them using the brakets (){}
// we can only have one default return from a .js file
const base_url = "https://image.tmdb.org/t/p/original";


function Row({title,fetchUrl,islarge}) {
    const [movies,setMovies] = useState([])
    const [trailerUrl , setTrailerUrl] = useState("")
    
    useEffect(()=>{
        // run once means []
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    },[])
    // console.log(movies)
    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        },
    }
    const handleclick = (movie)=>{
         if(trailerUrl){
             setTrailerUrl("");
         } else {
            movieTrailer(movie?.name || ""||movie?.title||movie?.original_name)
             .then((url) => {
                 const urlParams = new URLSearchParams(new URL(url).search);
                 setTrailerUrl(urlParams.get('v'))

             })
             .catch((error)=>console.log(error))
         }
    }
    console.table(movies)
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie)=>{
                    return <img 
                    onClick={()=>handleclick(movie)}
                    key={movie.id} className = {`row__poster ${islarge && "row__largeposter"}`} src={`${base_url}${islarge ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                })}
            </div>

            {trailerUrl?<YouTube videoId={trailerUrl} opts={opts}/>:<></>}
        </div>
    )
}

export default Row
