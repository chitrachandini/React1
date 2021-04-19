//import React, { Component } from 'react';
/*import axios from 'axios';
import {Card, CardContent, Typography,Button } from '@material-ui/core';
class Display extends Component {
  state = {
    post: [],
    hide:false
  }
  componentDidMount () {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/Comments/2').then(res => {
      console.log(res);
      this.setState({
        post: res.data
      })
    })
  }
    onClick=() => {
      this.setState ({
       hide : true
    })
  }
  render() {
    return (
      <div>
    {!this.state.hide ? 
            <Card>
              <CardContent>
                <Typography><b> Name is : </b>{this.state.post.name} </Typography>
                <Typography><b> email is : </b>{this.state.post.email} </Typography>
              </CardContent>
              
          </Card> :null}
        

<Button onClick = {this.onClick} >Delete</Button>

      
      </div>
    )
  }
}
export default Display;*/
/*import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
const styles={
    chandini:{
        border:'1px solid black',
      }
}
class Table extends Component {
    render(){
        return(
           <table>
            <thead>
                <tr>
                <b>employeename</b>
                <b> age</b> 
                <b> designation</b>
                <Columns />
                </tr>
            </thead>
            </table>
        )
    }
}

class Columns extends Component {
    render(){
        return(
            <React.Fragment>
            <tr className="chandini"><td>chandini</td><td> 23 </td><td> developer</td></tr>
            <tr><td>Aadhya</td><td> 20 </td><td> pilot</td></tr>
            <tr><td>Bhargavi</td><td> 25 </td><td> shipment officer</td></tr>
            </React.Fragment>
        )
    }
}
export default Table;*/
import React, { Component } from 'react';
class Table extends Component
{
    render(){
        return(
            <table border='1'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                </tr>
                </thead>
                <tbody>
                <Columns />
                </tbody>
            </table>
        )
    }
}

class Columns extends Component
{
    render()
    {
        return(
            <React.Fragment>
                <tr>
                    <td>Chandini</td>
                    <td>23</td>
                    <td>Developer</td>
                </tr>
                <tr>
                    <td>Aadhya</td>
                    <td>20</td>
                    <td>pilot</td>
                </tr>
                <tr>
                    <td>Bhargavi</td>
                    <td>25</td>
                    <td>Shipment officer</td>
                </tr>
                <tr>
                    <td>Dileep</td>
                    <td>28</td>
                    <td>Shipment officer</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default Table;