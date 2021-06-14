import { Button, Typography } from '@material-ui/core';
import React,{Component} from 'react';
import DisplayList from './DisplayList';
//import Video from './Video'
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
class CardDetails extends Component{
    state = {
        Display:[
    {
        id:1,
        title:"Karthavyam",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcRGN4lHrkcPml_TMYqUM0ukS3tpNXm_gNQ&usqp=CAU",
        time:"1 hrs 49 mins",
        cast:"Nayanathara,Vignesh",
        director:"Gopi Nainar",
        releasedate:"16 Mar 2018"
    },
    {
        id:2,
        title:"Hello",
        image:"data:image/jpeg;base64,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",
        time:"2 hrs 11 min",
        cast:"Akhil,Kalyani Priyadharshan",
        director:"Vikram Kumar",
        releasedate:"7 Dec 2017"
    },
    {
        id:3,
        title:"Chakra",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DY7RJMKc213iMLv5OHx3exYVzVWq2aapZhGpbCOx6LGf_rCju7Z_vRuEPvbnQO96SLk&usqp=CAU",
        time:"2 hrs 11 min",
        cast:"Vishal,Shraddha,Regina",
        director:"Ms Anandan",
        releasedate:"19 Feb 2021"
    },
    {
        id:4,
        title:"Avengers",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_URtZx3kYu0_jLJFVO_8JyPcGz5O_GGxfA&usqp=CAU",
        time:"2 hrs 6 min",
        cast:"Robert Downey",
        director:"Joss Whedon",
        releasedate:"11 Apr 2012"
    },
    {
        id:5,
        title:"Ant Man",
        image:"https://th.bing.com/th/id/OIP.7iEhs1fArMK_t76B0YB6ogHaK-?w=205&h=304&c=7&o=5&dpr=1.25&pid=1.71.7",
        time:"1 hrs 57 min",
        cast:"Paul Rudd",
        director:"Peyton Reed",
        releasedate:"29 June 2015"
    },
    {
        id:6,
        title:"The Nightingale",
        image:"https://th.bing.com/th/id/OIP.VrXhAN6liU4J8XcNFQ3-IQHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7",
        time:"2 hrs 16 min",
        cast:"Aisiling Fransciosi",
        director:"Jennifer Kent",
        releasedate:"6 Sep 2015"
    },
    {
        id:7,
        title:"Turbo",
        image:"https://th.bing.com/th/id/OIP.2wng8I7jvhMxlpNmZ5WaBgHaKq?w=206&h=296&c=7&o=5&dpr=1.25&pid=1.7",
        time:"1 hr 36 min",
        cast:"Ryan Reynolds",
        director:"David Soren",
        releasedate:"24 June 2013"
    },
    {
        id:8,
        title:"The Smurfs",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrogIkVV-cvTFVYMb6MWclGyqa1Ce6gOLVPg&usqp=CAU",
        time:"1 hr 43 min",
        cast:"Jonathan Winters",
        director:"Raja Gosnell",
        releasedate:"29 July 2011"
    },
    {
        id:9,
        title:"The Lorax",
        image:"https://th.bing.com/th/id/OIP.0FLwE-jvKdhz1o36WNqkFwHaKj?w=206&h=294&c=7&o=5&dpr=1.25&pid=1.7",
        time:"1 hr 26 min",
        cast:"Danny Diveto",
        director:"Chris Renaud",
        releasedate:"2 Mar 2012"
    },
    {
        id:10,
        title:"Look Like People",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHbArYeof85_Ml35CGf2hInWGe5I7Bnnu8Q&usqp=CAU",
        time:"1 hr 20 min",
        cast:"MacLeod Andrews",
        director:"Perry Blackshear",
        releasedate:"25 Jan 2015"
    },
    {
        id:11,
        title:"Stranger Things",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRd2Ygp-eCHt8JpHI0_TDJPHq-WNys9Oru2w&usqp=CAU",
        time:"51 min",
        cast:"Winona Ryder",
        director:"The duffer brothers",
        releasedate:"15 July 2016"
    },
    {
        id:12,
        title:"The Abandoned",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvDb6tKJuQhgf6HbE7CXMsixUw8oUWzxXHA&usqp=CAU",
        time:"1 hrs 39 min",
        cast:"Anastasia Hille",
        director:"Nacho Cerda",
        releasedate:"11 Sep 2006"
    },
    {
        id:13,
        title:"Black Panther",
        image:"https://th.bing.com/th/id/OIP.vtBPv0g_1jt-6aleWIeleAHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7",
        time:"2 hrs 14 min",
        cast:"ChadWick Boseman",
        director:"Ryan Coogler",
        releasedate:"29 Jan 2018"
    },
    {
        id:14,
        title:"Kong",
        image:"https://th.bing.com/th/id/OIP.FZdMX3i_uxCsD9G7cNHMMAHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7",
        time:"1 hr 58 min",
        cast:"Tom Hiddleston",
        director:"Jordan Vogt-Roberts",
        releasedate:"28 Feb 2017"
    },
    {
        id:15,
        title:"Rang de",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfbYJbXJbFPoifEtb_hYy0Yc7Hd1QeyQAag&usqp=CAU",
        time:"2 hrs 10 min",
        cast:"Nithin,Keerthy Suresh",
        director:"Venky Atluri",
        releasedate:"26 Mar 2021"
    }]}
    render(){
        return(
            <div>
                {this.state.Display.map(dis=>(
                   <DisplayList  title={dis.title} image = {dis.image} time={dis.time} cast = {dis.cast} director= {dis.director} releasedate = {dis.releasedate} id = {dis.id} />
            ))}
            {/*<div className="card">
            <div className="card-image">
             <p ><img src = "https://th.bing.com/th/id/OIP.-DKPEeKLnLjck0yt2In4oQHaHw?w=183&h=191&c=7&o=5&pid=1.7"/></p>
        </div>
        <div className="card-content">
        <Typography className="center">John Adison</Typography>
        <Typography className="center"><img className = "image" src="https://th.bing.com/th/id/OIP.AF4OLNf4aH1McmUyWuGfXwHaJ7?pid=ImgDet&rs=1"/>New Jersy,USA.</Typography>
        <hr/>
        <Button variant="contained" color="primary" >Follow</Button> <Button variant="contained" color="secondary">Send Message</Button>
        <hr/>
        <Typography className="center">Lorem ips consectetur adipisium,eiusmod tempor incididuin reprehendeanim</Typography>
        <hr/>
            </div>
                </div>*/}
                <div className="container">
                <div className="card">
                <p className="card-image"><img src = "https://th.bing.com/th/id/OIP.-DKPEeKLnLjck0yt2In4oQHaHw?w=183&h=191&c=7&o=5&pid=1.7"/></p>
                </div>
                <div className="card1"><div className="card-content">
                <Typography className="middle">John Adison</Typography>
                <Typography className="middle1"><img className = "image" src="https://th.bing.com/th/id/OIP.AF4OLNf4aH1McmUyWuGfXwHaJ7?pid=ImgDet&rs=1"/>New Jersy,USA.</Typography>
                <hr className="line"/>
                <Button className="move" variant="contained" color="primary" >Follow</Button> <Button variant="contained" color="secondary">Send Message</Button>
        <hr className="line"/>
        <Typography className="move1">Lorem ips consectetur adipisium,eiusmod tempor incididuin reprehendeanim</Typography>
        <div className="card">icons</div>
                </div></div>
                </div>
                </div>
        )
    }
}
export default CardDetails;
