export const addMovie = (movieData) =>{
    return{
        type: "MOVIE_LIST",
        payload: movieData
    }
}