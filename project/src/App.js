/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React,{Component} from 'react';
import {Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CardDetails from './CardDetails';
import Navbar from './Components/Navbar';
import Download from './Components/Download';
import LogIn from './Components/LogIn';
import ContactUs from './Components/ContactUs';
import Feedback from './Components/Feedback';
import AboutUs from './Components/AboutUs';
import Footer from './Footer'
import Video from './Video'
class App extends Component{
  render(){
    return (
    <div>
    <BrowserRouter>
        <div>
        <Navbar/>
          <Route exact path="/" component={CardDetails} />
          <Route exact path="/Download" component={Download}/>
          <Route exact path="/AboutUs" component={AboutUs}/>
          <Route exact path="/LogIn" component={LogIn}/>
          <Route exact path="/ContactUs" component={ContactUs}/>
          <Route exact path="/Feedback" component={Feedback}/>
          <Route exact path='/dis/:id' component={Video}/>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;

