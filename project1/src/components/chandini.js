import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import axios from "axios";
import * as actions from '../constant/types';

const Poster = ()=> {
    const [movieData, setMovieData] = React.useState([]);
    const dispatch = useDispatch();
    
    useEffect(() =>{
        fetchData();
      }, []);

      const fetchData = () =>{
        axios.get("./Movie.json").then((res) => {
          console.log(res.data);
          dispatch({
            type: actions.GET_POSTER,
            payload: res.data
          })
            setMovieData(res.data)}).catch((error) => {
              console.log('found an error');
          })
        }
     console.log(movieData)
     return (
        <div className="App">          
          {movieData &&
              movieData.map(({ title,cast,image,director,releasedate,time, id }) => (
              <div key={id} className="row">
                <strong>{title}</strong>
              </div>
            ))}
          
        </div>
      );
    }
    export default Poster;