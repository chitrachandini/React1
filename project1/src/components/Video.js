import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getVideo} from '../actions/MovieActions';
const Video = ()=>{
    let {id} = useParams();
    //alert (id)
    const[video,setVideo] = useState("")
    const[title,setTitle] = useState("");
    const[cast,setCast] = useState("");
    const[director,setDirector] = useState("");
    const[releasedate,setReleaseDate] = useState("");
    const[time,setTime] = useState("");
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie.movie);
    console.log(movie);
    useEffect(()=>{
        if(movie != null){
            setVideo(movie.video);
            setTitle(movie.title);
            setCast(movie.cast);
            setDirector(movie.director);
            setReleaseDate(movie.releasedate);
            setTime(movie.time);
        }
        dispatch(getVideo(id));
    },[movie])
    return (
        <div className="container">
                <p className="center"><b>Poster Video</b></p>
               {/*} <p className="center">
                    <iframe className = "center" src='https://www.bing.com/videos/search?q=karthavyam+trailer&docid=608014421124130437&mid=D2A5C27583CCE927D3A9D2A5C27583CCE927D3A9&view=detail&FORM=VIRE'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
    title='video'/></p>*/}
                        <p className="center">{video}</p>
                        <p className="center"><b>{title}</b></p>
                        <p className="center"><b>Cast:</b> {cast}</p><br/>
                        <p className="center"><b>Director : </b>{director}</p><br/>
                        <p className="center"><b>Releasedate : </b>{releasedate}</p><br/>
                        <p className="center"><b>Time :</b> {time} </p>
        </div>
    )
}
export default Video;