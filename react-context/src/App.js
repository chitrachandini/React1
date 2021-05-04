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
import {React} from 'react';
import AddProduct from './Components/AddProducts';
import {Nav} from './Components/Nav';
import { ProductProvider } from './Components/ProductContext';
import { ProductList } from './Components/ProductList';
function App (){
  /*const listOfItems = [
    {
        Name : 'Le Rouge et le Noir',
        Author : 'Stendhal',
        price:  500,
        publisher:'A.Levasseur',
        publicationdate: 'November 1830'
    },
    {
        Name : 'The History of Tom Jones,a Founding',
        Author:'Henry Fielding',
        price:  600,
        publisher:'Andrew Millar',
        publicationdate: '28 Feb 1749'
    },
    {
        Name : 'Madame Bovary: Mœurs de province',
        Author : 'Gustave Flaubert',
        price:  800,
        publisher:'Revue de Paris',
        publicationdate: '1856 (in serial) & April 1857 (in book form)'
    },
];*/
return (
  <div className="App">
     <ProductProvider>
       <Nav />
       <AddProduct/>
       <ProductList />
     </ProductProvider>
  </div>
)
}
export default App;
/*import {Nav} from './Components/Nav';
import { ProductList } from './Components/productList';
function App(){
  return(
    <div className="App">
    <Nav/>
    <ProductList/>
    </div>
  );
};
export default App;*/
