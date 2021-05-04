import React from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {addMovie} from '../actions';
import '../App.css';

const MovieList = () =>{
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [year, setYear] = useState("");

    const handleMovieList = (e) =>{
        // e.preventDefault();
        e.preventDefault();
        const add_movie = {
            name: name,
            year: year,
        }
        console.log(name,year);
        dispatch(addMovie(add_movie));
        setName("");
        setYear("");
    }

    return(
        <form onSubmit={(e) => handleMovieList(e)}>
            <input type="text" placeholder="Enter movie name" value={name} className="name" onChange={(e) =>setName(e.target.value)}></input>
            <input type="text" placeholder="Enter movie release date" value={year} className="year" onChange={(e) =>setYear(e.target.value)}></input>
            <button type="submit">submit</button>
        </form>
    )
}
export default MovieList;