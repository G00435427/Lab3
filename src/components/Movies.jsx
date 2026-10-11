import MovieItem from "./MovieItem";  {/*Imports movieItem */}
export default function Movies(props){
    {/*Loops through each moving in the array */}
    return props.movies.map( 
        (movie)=>{
            return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem> //Passes the current movie to Movie Item and gives it a unique key
        }
    )
}