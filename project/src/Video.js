import React from 'react'
const Video = (props)=>{
    const {title ,releasedate,time,cast,director}=props;
     return(
        <div className="container">
                <p className="center"><b>Poster Video</b></p>
                <p className="center">
                    <iframe className = "center" src='https://www.bing.com/videos/search?q=karthavyam+trailer&docid=608014421124130437&mid=D2A5C27583CCE927D3A9D2A5C27583CCE927D3A9&view=detail&FORM=VIRE'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'/></p>
                        <p className="center"><b>{title}</b></p>
                        <p className="center"><b>Cast:</b> {cast}</p><br/>
                        <p className="center"><b>Director : </b>{director}</p><br/>
                        <p className="center"><b>Releasedate : </b>{releasedate}</p><br/>
                        <p className="center"><b>Time :</b> {time} </p>
        </div>
     )
}
export default Video;