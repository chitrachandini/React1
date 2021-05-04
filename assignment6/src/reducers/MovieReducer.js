import { ADD_MOVIE } from "../actions";

const initialState = {
    movieData: [
        {
            name:"Jurassic Park",
            year:1993
        },
        {
            name:"Notting Hill",
            year:1999
        }
    ]
}

const MovieReducer = (state = initialState, action) =>{
    switch(action.type){
        case "MOVIE_LIST":
            return{
                ...state,
                movieData: [...state.movieData, action.payload,
                ]

            }
        default:
            return state;
    }
    
}
export default MovieReducer;