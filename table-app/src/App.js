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
import Display from './Display';
import axios from 'axios';
import Lifecycle from './Lifecycle';

class App extends Component {
  state = {
    post: {}
  }

  componentDidMount = () => {
    axios.get('http://jsonplaceholder.typicode.com/posts/7').then(res => {
      console.log(res);
      this.setState({
        post: res.data
      })
    })
  }

  render() {
  const {post} = this.state;
    return (
      <div>
      {post.id}
      {post.userId}
      {post.title}
      {post.body}
    <Lifecycle />
    <Display displayData = {this.state.displayData}/>
      </div>
    )
  }
}

export default App;
