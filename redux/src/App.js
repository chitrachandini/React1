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

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, logInUser, logOutUser } from './actions';
import { UserContainer } from './Components/UserContainer';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged=useSelector((state)=>state.isLogged);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handlelogIn = () => {
    dispatch(logInUser());
  };
  const handlelogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="App">
      {/*Test Redux*/}
      <UserContainer/>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br/>
      <br/>
      <button onClick={handlelogIn}>logIn</button>
      <button onClick={handlelogOut}>logOut</button>
      {/*<h3>isLogged:{isLogged.toString()}</h3>*/}
     {/*{isLogged ? <h3>userLogIn</h3>:<h3>userLoggedOut</h3>}*/}
    </div>
  );
}

export default App;
