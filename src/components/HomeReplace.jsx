import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductData } from './data';
import { MyAppContext } from './App';
import { Rating } from '@mui/material';

import '../Styles/homereplace.css';

function HomeReplace() {
  
  const navigate = useNavigate();

  const { category } = useParams();
  
  const { inputValue } = useContext(MyAppContext);

  console.log("input", inputValue)

  // Filter the products based on the category
  const filteredProducts = ProductData.filter((product) => product.category === category);
 
  const productDetails = (id) =>{
    navigate(`/products/${id}`)
 }
 
  return (
    <div className="flexbox">
      {filteredProducts.map((product) => (
        <div key={product.id} className="cards"  onClick={() => productDetails(product.id)}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <div className="rating-container">
            <Rating
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

export default HomeReplace
