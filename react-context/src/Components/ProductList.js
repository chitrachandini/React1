import {React, useContext} from 'react';
import {Product} from './Product';
import './books-style.css';
import { ProductContext } from './ProductContext';
export const ProductList = ({listItems}) => {
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
    const [products,setProducts] = useContext(
        ProductContext
    )
    return (
        <div>
        {products.map((item) => {
            return<Product Name={item.Name} price={item.price} publicationdate = {item.publicationdate} key = {item.id}/>;
        })}
        </div>
    );
    
};