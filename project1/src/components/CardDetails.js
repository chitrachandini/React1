import React from 'react';
import {useSelector} from 'react-redux';
import DisplayList from './DisplayList'
const CardDetails=()=>{
    const movieDetails = useSelector(state => state.movie.movieDetails);
    console.log(movieDetails);
    return(
        <div>
         {movieDetails.map(dis=>(
            <DisplayList  title={dis.title} image = {dis.image} time={dis.time} cast = {dis.cast} director= {dis.director} releasedate = {dis.releasedate} id = {dis.id} />
         ))}
        </div>
    )
}
export default CardDetails;