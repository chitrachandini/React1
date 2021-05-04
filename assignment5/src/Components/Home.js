import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component
{
    state ={
        todosData : []
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>{
            console.log(res.data);
            this.setState({
               todosData: res.data
            })
        })
    }

    render(){
        const todosList = this.state.todosData.map(todo => {
            return(
                <div  >
                    <p><b>Title:</b>{todo.title}</p>
                </div>
            )
        })
        return(
            <div>
                {todosList}
            </div>
        )
    }
}
export default Home;