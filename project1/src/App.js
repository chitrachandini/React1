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
import CardDetails from './components/CardDetails';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Download from './components/Download';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import Footer from './components/Footer'
import {Provider} from 'react-redux';
import store from './redux/store';
import Video from './components/Video'
class App extends Component{
  render(){
    return (
    <div>
    <Provider store = {store}>
    <BrowserRouter>
        <div>
        <Navbar/>
          <Route exact path="/" component={CardDetails} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Download" component={Download} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Feedback" component={Feedback} />
          <Route exact path='/Video/:id' component={Video}/>
          <Footer/>
        </div>
      </BrowserRouter>
      </Provider>
    </div>
    );
  }
}

export default App;
