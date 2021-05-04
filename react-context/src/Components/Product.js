import {React} from 'react';
import './styles.css';
export const Product = ({Name,price,publicationdate}) => {
    return(
        <div className = "books-list">
        <table class="column" border="1" >
          <tr>
            <td>{Name}</td>
            <td>{price}</td>
            <td>{publicationdate}</td>
          </tr>
        </table>
        </div>
    );
};