import {React,createContext,useState} from 'react';
export const ProductContext = createContext();
export const ProductProvider = (props) => {
    const [products,setProducts] = useState(
        [
            {
                Name : 'Le Rouge et le Noir',
                Author : 'Stendhal',
                price:  "$500",
                publisher:'A.Levasseur',
                publicationdate: 'November 1830'
            },
            {
                Name : 'The History of Tom Jones,a Founding',
                Author:'Henry Fielding',
                price:  "$600",
                publisher:'Andrew Millar',
                publicationdate: '28 Feb 1749'
            },
            {
                Name : 'Madame Bovary: Mœurs de province',
                Author : 'Gustave Flaubert',
                price:  "$800",
                publisher:'Revue de Paris',
                publicationdate: '1856 (in serial) & April 1857 (in book form)'
            },
        ]);
        return (
            <ProductContext.Provider value={[products,setProducts]}>
            {props.children}
            </ProductContext.Provider>
        )
}