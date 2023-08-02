import React, { useContext,  useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductData } from './data';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { AddShoppingCart, Payment } from '@mui/icons-material';
import '../Styles/productDetails.css';
import loader from "../Images/loader.gif";
import { MyAppContext } from './App';
import Alert from '@mui/material/Alert';
function ProductDetails() {
  const navigate = useNavigate();
  const { cartItem, setCartItem, setCount, login } = useContext(MyAppContext);
  const { id } = useParams();
  const [loaders, setLoaders] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [alert, setAlert] = useState(false);

  const product = ProductData.find((product) => product.id === parseInt(id));

  const handleLoader = () => {
    setCount((prev) => prev + 1);
    setLoaders(false);
    setCartItem([...cartItem, product]);
    setTimeout(() => {
      setLoaders(true);
    }, 200);
    setAlert(true);
    setTimeout(() => {
      setAlert(false)
    }, 2000)

  };

  

  const navigatePayment = () => {
    if (login) {
      navigate("/payment");
    } else {
      navigate("/login")
    }
  };

  const handleAdditionalImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  if (!product) {
    return <div className="product-not-found">Product not found.</div>;
  }

  return (
    <>
      {loaders ? (
        <div className="product-details">
          <div className="additional-photos">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${index}`}
                className={`additional-image ${selectedImage === image ? 'selected' : 'image'}`}
                onClick={() => handleAdditionalImageClick(image)}
              />
            ))}
          </div>
          <div className="main-section">
            <img src={selectedImage || product.thumbnail} alt={product.title} className="mainpic" />
            <div className="buttons">
              <Button
                onClick={handleLoader}
                variant="outlinedst"
                startIcon={<AddShoppingCart />}
                style={{ border: '1px solid rgb(159, 32, 137)', color: 'rgb(159, 32, 137)' }}
              >
                Add to Cart
              </Button>
              <Button
                onClick={navigatePayment}
                variant="contained"
                startIcon={<Payment />}
                style={{ backgroundColor: 'rgb(159, 32, 137)' }}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div className="product-info">
            <div className="productDisName">
              <h2 className="product-title">{product.title}</h2>
              <h4 className="product-price">Price: ${product.price}</h4>
            </div>
            <div className="size-selection">
              <h2 className="headings">Select Size:</h2>
              <FormControl component="fieldset">
                <RadioGroup name="size" value={selectedSize} onChange={handleSizeChange} row>
                  <FormControlLabel value="S" control={<Radio />} label="S" />
                  <FormControlLabel value="M" control={<Radio />} label="M" />
                  <FormControlLabel value="L" control={<Radio />} label="L" />
                  <FormControlLabel value="XL" control={<Radio />} label="XL" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="product-details-list">
              <h2 className="headings">Product details</h2>
              <p>Discription: {product.description}</p>
              <p>Rating: {product.rating}</p>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <p>Stock: {product.stock} left</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader" style={{ backgroundColor: loaders ? 'white' : 'rgb(51 51 51 / 100%)' }}>
          <img className="loadingMeesho" src={loader} alt="Loading" />
        </div>
      )}
      {alert &&
      <div
      className="alert-container"
      style={{
        position: 'fixed',
        width: '300px',
        bottom: '44px',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyItems: 'center',
      }}
    >
      <Alert
        severity="success"
        color="info"
        className="alert-box"
        style={{
          backgroundColor: 'black',
          width: '230px',
          justifyItems: 'center',
          color: 'white',
          borderRadius: '10px',
          fontSize: '15px',
          opacity: 0,
        }}
      >
        Product is added to cart
      </Alert>
    </div>
    
}
     

    </>
  );
}

export default ProductDetails;
