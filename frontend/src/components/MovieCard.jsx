import "../css/MovieCard.css"
function MovieCard({movie}){
// MovieCard has a prop movie that will be an object with many properties
// like movie name, release Date, movie poster etc
    function onFavouriteClick(){
        alert("clicked")
    }
     return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                    ❤
                </button>
            </div>

        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>

     </div>
}

export default MovieCard

