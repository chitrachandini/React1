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
/*import React , {Component} from 'react'
import Display from './Display'
class App extends Component{
    state = {
        firstName:"chandini",
        lastName:"chitra",
        age:23,
        strOrNum:25
    }
    render(){
      return (
          <Display firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age}  strOrNum={this.state.strOrNum}/>
      )
    }
}
export default App;*/
import React, { Component } from 'react'
import Display from './Display'
class App extends Component {
    state = {
      empId : 12,
      name : "chandini",
      age :23,
      city : "hyderabad",
      designation : "front-end designer",
      random : 0
    }
    handleClick(){
      const min = 1;
      const max = 100;
      const rand = Math.floor(Math.random() * (max-min))+min;
      this.setState({random:this.state.random +rand});
    }
    render(){
      return(
          <div>
             <Display empId={this.state.empId} name={this.state.name} age={this.state.age}  city={this.state.city} designation={this.state.designation}/>
             <button onClick={this.handleClick.bind(this)}>Random number</button>
             <div>Number is {this.state.random}</div>
          </div>
      )
    }
}
export default App;
