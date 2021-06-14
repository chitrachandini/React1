import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import DisplayList from './DisplayList'
const CardDetails=()=>{
    const movieDetails = useSelector(state => state.movie.movieDetails);
    const[search,setSearch]=useState("");
    console.log(movieDetails);
    const filterMovieDetails = movieDetails.filter(dis =>dis.title.toLowerCase().includes(search.toLowerCase()));
    return(
        <div>
        <form>
           <div className="row form-input">
              <div className="col-m-12">
                <input type="text" name="movieName" 
                placeholder="search for the movies" 
                className="input" value ={search} 
                onChange={(e)=>setSearch(e.target.value)}/>
              </div>
           </div>
        </form>
         {filterMovieDetails.map(dis=>(
            <DisplayList  title={dis.title} image = {dis.image} time={dis.time} cast = {dis.cast} director= {dis.director} releasedate = {dis.releasedate} id = {dis.id} />
         ))}
        </div>
    )
}
export default CardDetails;