import {React, useContext, useState} from 'react';
import { ProductContext } from './ProductContext';
const AddProduct=()=>{
    const [Name,setName] = useState();
    const [price,setPrice] = useState();
    const [publicationdate,setPublicationDate]=useState();
    const [Products,setProducts]=useContext(ProductContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }
    const updatePublicationDate = (e) => {
        setPublicationDate(e.target.value);
    }
    const addProduct=(e)=>{
        e.preventDefault();
        setProducts((preProducts)=>[
            ...preProducts,
          {Name:Name,price:`$${price}`,publicationdate:publicationdate}
        ])
    }
    return(
        <div className = "container">
            <form onSubmit = {addProduct} >
            <input type = "text" name = "name" value = {Name} placeholder="enter name" onChange={updateName}></input>
            <input type = "number" price = "price" value = {price} placeholder="enter price" onChange={updatePrice}></input>
            <input type = "text" publicationdate = "publicationdate" value = {publicationdate} placeholder="enter date" onChange={updatePublicationDate}></input>
            <button>submit</button>
      </form>
        </div>
    )
}
export default AddProduct;