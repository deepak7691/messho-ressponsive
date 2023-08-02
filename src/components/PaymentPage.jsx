import React, { useContext, useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import '../Styles/payment.css';
import { useNavigate } from 'react-router-dom';
import { MyAppContext } from './App';
import loader from '../Images/loader.gif';

function PaymentPage() {
  const navigate = useNavigate();
  const {setCount} = useContext(MyAppContext)
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState(false);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setOpen(true);
    setTimeout(()=>{
      navigate("/")
      setCount(0);
    },4000)
    
  
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg">
    <form onSubmit={handleSubmit}>
      <h2 className="payment">Payment Details</h2>
      <input
        type="number"
        id="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="Enter Card Number"
        className="inputdata"
        required
      />
      <input
        type="text"
        id="expiryDate"
        value={expiryDate}
        onChange={handleExpiryDateChange}
        placeholder="Enter Expiry Date"
        className="inputdata"
        required
      />
      <input
        type="number"
        id="cvv"
        value={cvv}
        onChange={handleCVVChange}
        placeholder="Enter CVV"
        className="inputdata"
        required
      />
      <input
        type="text"
        id="address"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter Your Address"
        className="inputdata"
        required
      />
      <Button className="buttonSubmit" variant='contained' type="submit" style={{color:"black",background:"white",margin:"15px auto"}}>
        Pay Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ThankYou
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your Order is placed Successfully<br></br>
            
            Redirecting you to home page <br></br>
            <img src={loader} alt='loader' style={{width:"100px",height:"100px",display:'flex',alignItems:"center", justifyContent:"center",margin:"5px auto", padding:"5px 5px"}}/>
          </Typography>
        </Box>
      </Modal>
    </form>
    </div>
  );
}

export default PaymentPage;
