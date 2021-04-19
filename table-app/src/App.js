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

import React, { Component } from "react";
import Table from './Table';
import {Card, CardContent, Typography} from '@material-ui/core'

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            details: [],
        }
    }
    

    componentDidMount = () =>{
        this.getData()
    }
    getData()
    {
      fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
        .then(res => res.json()).then(resp =>{
            this.setState({
                details: resp
            })
        })
    }

    handleDelete = id => {
      console.log(id);
      const items = this.state.details.filter(data => data.id !== id);
      this.setState({ details: items });
      console.log(items);
    };
    

    render(){
          return(
              <Card>
              {this.state.details.map(data =>{
                return(
                  <CardContent style={{width: "100%",border: "1px solid black"}}>
                      <Typography key = {data.id}>
                         <p>Name : {data.firstName}</p>
                         <p>email : {data.email}</p>
                         <p>body:{data.age}</p>
                      </Typography>
                      <button onClick={() =>this.handleDelete(data.id)}>Delete</button>
                  </CardContent> 
                )})}
              <Table/>
            </Card>
          );
        }
}
export default App;