import React  from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './CardDetails.css'
const DisplayList =(props)=>{
    const {title,image,time,cast,director,releasedate,id}=props;
    return(
        <div className = "container cardData">
        <div className = "card">
        <div className="card-image">
            <img src={image}></img>
        </div>
        <div className="card-content">
           <span className = "card-title"><b>{title}</b></span>
           <p><b>Cast:</b> {cast}</p><br/>
           <p><b>Director : </b>{director}</p><br/>
           <p><b>Releasedate : </b>{releasedate}</p><br/>
           <p><b>Time :</b> {time} | <Button variant="outlined" size="small" >Drama</Button></p><br/>
            <Link to ={`/Video/${id}`}><button className="primary">View</button></Link>
            </div>
     </div>
        </div>
    )
}
export default DisplayList;