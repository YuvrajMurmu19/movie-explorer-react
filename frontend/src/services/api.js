const API_KEY = "a12f79fb5e62632ca65a84bc8590ac6a"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) =>{
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    )
    const data = await response.json();
    return data.results;
}