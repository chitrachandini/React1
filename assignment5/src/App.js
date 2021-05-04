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
import React, { Component } from 'react';
import {Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';

class App extends Component
{
  state = {
    displayData: []
  };

  signUp = (props) => {
    let displayData = [...this.state.displayData, props];
    console.log(displayData);
    this.setState({
      displayData: displayData
    })
  }
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
      
    )
  }
}
export default App;
