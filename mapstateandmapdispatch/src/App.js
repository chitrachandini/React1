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
/*import React, {Component} from 'react';
import Counter from './Counter';
class App extends Component {

  render(){
    return(
      <div>
      <Counter />
      </div>
    )
  }
}

export default App;*/
import React, {Component} from 'react';
import Counter from './Counter';
import EmployeeData from './EmployeeData/EmployeeData';

class App extends Component {

  render(){
    return(
      <div>
      <Counter />
      {<EmployeeData />}
      </div>
    )
  }
}

export default App;
