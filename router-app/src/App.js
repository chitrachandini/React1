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
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import EmployeeData from './Components/EmployeeData';

class App extends Component{

  render(){
    return (
    <BrowserRouter>
    <div>
    <Navbar />
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contactus' component={Contact} />
    <Route path='/employeedata' component={EmployeeData}/>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
