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
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () =>{
  const [firstName, setName] = useState('alex');
  // useState initialize your state variable (firstName);
  // setName is function to update our state variable

  const [lastName, setLastName] = useState('');
  // const [age, setAge] = useState(20);
  // state var, function
  // reading/displaying state variable

    useEffect(() => {
      document.title = lastName;
    })

    const [post, setPost] = useState({});

    useEffect(() =>{
      fetchData();
    }, []);

   const fetchData = () =>{
      axios.get('http://jsonplaceholder.typicode.com/posts/7').then(res => {
        console.log(res.data);
        setPost(res.data);
      })
    }

   return(
    <div>
    <p>{firstName}</p>
    <p>{lastName}</p>
    <button onClick={()=> setName('harry')}>Click Here!</button>
    <button onClick={()=> setLastName('jenner')}>Click Here!</button>
    {post.title}
      Happy Coding!
    </div>
  )
}
export default App;

