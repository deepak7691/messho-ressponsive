import React, { useContext } from 'react';
import { ProductData } from './data';
import { MyAppContext } from './App';
import Rating from '@mui/material/Rating';
import "../Styles/meesho.css"
import { useNavigate } from 'react-router-dom';

function Meesho() {
  const navigate = useNavigate();
  const { inputValue } = useContext(MyAppContext);

  // Filter the products based on the input value
  const filtered = inputValue
    ? ProductData.filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase()))
    : ProductData;

    const productDetails = (id) =>{
       navigate(`/products/${id}`)
    }

  return (
    <div className="flexbox">
      {filtered.map((product) => (
        <div key={product.id} className="cards" onClick={() => productDetails(product.id)}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <div className="rating-container">
            <Rating style={{overflow:"hidden"}}
              name={`rating-${product.id}`}
              value={product.rating}
              precision={0.1}
              readOnly
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Meesho;
