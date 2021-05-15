import {GET_VIDEO} from '../constant/types'
const initialState = {
    movieDetails:[
{
    id:1,
    title:"Karthavyam",
    image:"https://th.bing.com/th/id/OIP.zHuMOYfR9rT8j5k3Tmmz_wAAAA?w=121&h=180&c=7&o=5&pid=1.7",
    time:"1 hrs 49 mins",
    cast:"Nayanathara,Vignesh",
    director:"Gopi Nainar",
    releasedate:"16 Mar 2018",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=karthavyam+trailer&docid=608014421124130437&mid=D2A5C27583CCE927D3A9D2A5C27583CCE927D3A9&view=detail&FORM=VIRE'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:2,
    title:"HelloGuruPremakosame",
    image:"https://th.bing.com/th/id/OIP.kygVozerQgM4zknaChsEXwHaLH?w=179&h=268&c=7&o=5&pid=1.7",
    time:"2 hrs 20 min",
    cast:"	Ram,Anupama ",
    director:"Trinadha Rao Nakkina",
    releasedate:"18 October 2018",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=hello+guru+premakosame+movie+trailer&cvid=b5c8b56dcab54c5789d826cf6a3ea4c7&aqs=edge..69i57.19573j0j1&pglt=2083&PC=U531&ru=%2fsearch%3fq%3dhello%2bguru%2bpremakosame%2bmovie%2btrailer%26cvid%3db5c8b56dcab54c5789d826cf6a3ea4c7%26aqs%3dedge..69i57.19573j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531&view=detail&mmscn=vwrc&mid=33A0CE3CA0051D18194433A0CE3CA0051D181944&FORM=WRVORC'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:3,
    title:"Chakra",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DY7RJMKc213iMLv5OHx3exYVzVWq2aapZhGpbCOx6LGf_rCju7Z_vRuEPvbnQO96SLk&usqp=CAU",
    time:"2 hrs 11 min",
    cast:"Vishal,Shraddha,Regina",
    director:"Ms Anandan",
    releasedate:"19 Feb 2021",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=chakra+movie+trailer&view=detail&mid=FD7480533D362739067BFD7480533D362739067B&FORM=VIRE0&ru=%2fsearch%3fq%3dchakra%2bmovie%2btrailer%26cvid%3d1e06e5197ac34181a57c7cf335b48d89%26aqs%3dedge.0.0.6667j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:4,
    title:"Avengers",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_URtZx3kYu0_jLJFVO_8JyPcGz5O_GGxfA&usqp=CAU",
    time:"2 hrs 6 min",
    cast:"Robert Downey",
    director:"Joss Whedon",
    releasedate:"11 Apr 2012",video:<iframe className = "center" src='https://www.bing.com/videos/search?q=avengers+movie+trailer&view=detail&mid=E312836C5308C80987FAE312836C5308C80987FA&FORM=VIRE0&ru=%2fsearch%3fq%3davengers%2bmovie%2btrailer%26cvid%3d559f206ad0d641a8940f767f7d2d037e%26aqs%3dedge.0.0j69i57j0l4.6999j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:5,
    title:"Ant Man",
    image:"https://th.bing.com/th/id/OIP.7iEhs1fArMK_t76B0YB6ogHaK-?w=205&h=304&c=7&o=5&dpr=1.25&pid=1.71.7",
    time:"1 hrs 57 min",
    cast:"Paul Rudd",
    director:"Peyton Reed",
    releasedate:"29 June 2015",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=antman+movir+trailer&view=detail&mid=FDA0C8DA03205CB88D9DFDA0C8DA03205CB88D9D&FORM=VIRE0&ru=%2fsearch%3fq%3dantman%2bmovir%2btrailer%26cvid%3d39b0d1521be549fea3b9169663ecbd9d%26aqs%3dedge..69i57j0.8408j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:6,
    title:"The Nightingale",
    image:"https://th.bing.com/th/id/OIP.VrXhAN6liU4J8XcNFQ3-IQHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7",
    time:"2 hrs 16 min",
    cast:"Aisiling Fransciosi",
    director:"Jennifer Kent",
    releasedate:"6 Sep 2015",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=the+nightingale+movie+trailer&view=detail&mid=A02D4D944BB13174723CA02D4D944BB13174723C&FORM=VIRE0&ru=%2fsearch%3fq%3dthe%2bnightingale%2bmovie%2btrailer%26cvid%3ddf9151295403414cadb3bdd01680ebb5%26aqs%3dedge.0.0l4.9410j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:7,
    title:"Turbo",
    image:"https://th.bing.com/th/id/OIP.2wng8I7jvhMxlpNmZ5WaBgHaKq?w=206&h=296&c=7&o=5&dpr=1.25&pid=1.7",
    time:"1 hr 36 min",
    cast:"Ryan Reynolds",
    director:"David Soren",
    releasedate:"24 June 2013",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=turbo+movie+trailer&view=detail&mid=6A367E92BFD30EDFA70E6A367E92BFD30EDFA70E&FORM=VIRE0&ru=%2fsearch%3fq%3dturbo%2bmovie%2btrailer%26cvid%3d1263006fde5b4616ac7796d268fd955b%26aqs%3dedge.0.0.6296j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:8,
    title:"The Smurfs",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrogIkVV-cvTFVYMb6MWclGyqa1Ce6gOLVPg&usqp=CAU",
    time:"1 hr 43 min",
    cast:"Jonathan Winters",
    director:"Raja Gosnell",
    releasedate:"29 July 2011",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=the+smurfs+movie+trailer&view=detail&mid=8BB0644186B5409C0CCA8BB0644186B5409C0CCA&FORM=VIRE0&ru=%2fsearch%3fq%3dthe%2bsmurfs%2bmovie%2btrailer%26cvid%3d279a875f4a9144878869606c32f40523%26aqs%3dedge.0.0.7535j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:9,
    title:"The Lorax",
    image:"https://th.bing.com/th/id/OIP.0FLwE-jvKdhz1o36WNqkFwHaKj?w=206&h=294&c=7&o=5&dpr=1.25&pid=1.7",
    time:"1 hr 26 min",
    cast:"Danny Diveto",
    director:"Chris Renaud",
    releasedate:"2 Mar 2012",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=lorax+trailer&view=detail&mid=3E002563153DAC36F0893E002563153DAC36F089&FORM=VIRE0&ru=%2fsearch%3fq%3dlorax%2btrailer%26cvid%3d0e5cd362c7194a49b33966c4cd42418c%26aqs%3dedge.0.0l2.4285j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:10,
    title:"Look Like People",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHbArYeof85_Ml35CGf2hInWGe5I7Bnnu8Q&usqp=CAU",
    time:"1 hr 20 min",
    cast:"MacLeod Andrews",
    director:"Perry Blackshear",
    releasedate:"25 Jan 2015",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=look+like+people+trailer&view=detail&mid=936AD8F9CC5AACBC4AB7936AD8F9CC5AACBC4AB7&FORM=VIRE0&ru=%2fsearch%3fq%3dlook%2blike%2bpeople%2btrailer%26cvid%3da127c5b005d4427693f819c3ae49d569%26aqs%3dedge..69i57.7512j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:11,
    title:"Stranger Things",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRd2Ygp-eCHt8JpHI0_TDJPHq-WNys9Oru2w&usqp=CAU",
    time:"51 min",
    cast:"Winona Ryder",
    director:"The duffer brothers",
    releasedate:"15 July 2016",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=stranger+things+trailer&cvid=c65823056f6341a9b3ac6542d03d3188&aqs=edge.0.0l7.8036j0j1&pglt=2083&PC=U531&ru=%2fsearch%3fq%3dstranger%2bthings%2btrailer%26cvid%3dc65823056f6341a9b3ac6542d03d3188%26aqs%3dedge.0.0l7.8036j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531&view=detail&mmscn=vwrc&mid=907FBAA92D29A8643ED8907FBAA92D29A8643ED8&FORM=WRVORC'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:12,
    title:"The Abandoned",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvDb6tKJuQhgf6HbE7CXMsixUw8oUWzxXHA&usqp=CAU",
    time:"1 hrs 39 min",
    cast:"Anastasia Hille",
    director:"Nacho Cerda",
    releasedate:"11 Sep 2006",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=the+abandoned+trailer&view=detail&mid=368AEB43F8A8DD0ECC8F368AEB43F8A8DD0ECC8F&FORM=VIRE0&ru=%2fsearch%3fq%3dthe%2babandoned%2btrailer%26cvid%3db16e94754b3e42b88b84075e0847a15e%26aqs%3dedge.0.0.7397j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:13,
    title:"Black Panther",
    image:"https://th.bing.com/th/id/OIP.vtBPv0g_1jt-6aleWIeleAHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7",
    time:"2 hrs 14 min",
    cast:"ChadWick Boseman",
    director:"Ryan Coogler",
    releasedate:"29 Jan 2018",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=blank+panther+trailer&view=detail&mid=C40A398303E600F1247BC40A398303E600F1247B&FORM=VIRE0&ru=%2fsearch%3fq%3dblank%2bpanther%2btrailer%26cvid%3d1ec7494e15e44cb9b40ee3020b0c4126%26aqs%3dedge..69i57j0l6.6848j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:14,
    title:"Kong",
    image:"https://th.bing.com/th/id/OIP.FZdMX3i_uxCsD9G7cNHMMAHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7",
    time:"1 hr 58 min",
    cast:"Tom Hiddleston",
    director:"Jordan Vogt-Roberts",
    releasedate:"28 Feb 2017",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=kong+trailer&view=detail&mid=F5D356962AF5C117A0D2F5D356962AF5C117A0D2&FORM=VIRE0&ru=%2fsearch%3fq%3dkong%2btrailer%26cvid%3d763fc766ce354448a1256b2075fe3fc1%26aqs%3dedge.0.0l3.4319j0j1%26pglt%3d2083%26FORM%3dANNTA1%26PC%3dU531'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
},
{
    id:15,
    title:"Rang de",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfbYJbXJbFPoifEtb_hYy0Yc7Hd1QeyQAag&usqp=CAU",
    time:"2 hrs 10 min",
    cast:"Nithin,Keerthy Suresh",
    director:"Venky Atluri",
    releasedate:"26 Mar 2021",
    video:<iframe className = "center" src='https://www.bing.com/videos/search?q=rangde+trailer&go=Search&qs=ds&ru=%2fsearch%3fq%3drangde%2btrailer%26go%3dSearch%26qs%3dds%26form%3dQBRE&view=detail&mmscn=vwrc&mid=DE32752C495747101BEFDE32752C495747101BEF&FORM=WRVORC'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
title='video'/>
}],
movie:null
}
const movieReducer =(state = initialState,action) =>{
switch(action.type) {
    case GET_VIDEO:
        let arr = state.movieDetails.filter(movie=>movie.id == action.payload)
        arr = arr.values();
        for(let val of arr){
            arr = val;
        }
        return {
            ...state,
            movie:arr
        }
  default:
    return state;
  }
}  
export default movieReducer;