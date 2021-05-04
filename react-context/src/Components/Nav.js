import {React, useContext} from 'react';
import './nav-style.css';
import { ProductContext } from './ProductContext';
export const Nav = () => {
    const [products,setProducts]=useContext(
        ProductContext
    )
    return(
        <nav className="nav-container">
            <h3>Company Name</h3>
            <h3>List of products:{products.length}</h3>
        </nav>
    );
};