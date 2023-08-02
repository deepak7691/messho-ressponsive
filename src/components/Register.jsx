import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);



  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
    localStorage.setItem('name', value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    localStorage.setItem('password', value);
  };

  const handlePhone = (event) => {
    const value = event.target.value;
    setPhone(value);
    localStorage.setItem('phone', value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    localStorage.setItem('email', value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setOpen(true);
    setTimeout(() => {
      navigate('/login');
    }, 4000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg">
    <form onSubmit={handleSubmit}>
      <h2 className="payment">New User Registration</h2>
      <input
        type="text"
        id="cardNumber"
        value={name}
        onChange={handleName}
        placeholder="Enter Your Name"
        className="inputdata"
        required
      />
      <input
        type="email"
        id="expiryDate"
        value={email}
        onChange={handleEmail}
        placeholder="Enter Your Email"
        className="inputdata"
        required
      />
      <input
        type="phone"
        id="cvv"
        value={phone}
        onChange={handlePhone}
        placeholder="Enter Phone Number"
        className="inputdata"
        required
      />
      <input
        type="password"
        id="address"
        value={password}
        onChange={handlePassword}
        placeholder="Create Password"
        className="inputdata"
        required
      />
      <div className="batan">
        <Button
          className="buttonSubmit"
          variant="contained"
          type="submit"
          style={{ color: 'black', background: 'white' }}
        >
          Create Account
        </Button>
        <Button
          onClick={() => navigate('/login')}
          className="buttonSubmit"
          variant="contained"
          style={{ color: 'black', background: 'white' }}
        >
          Have an Account?
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Successfully registered
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Now Please Login <br />
            Redirecting you to the Login Page
          </Typography>
        </Box>
      </Modal>
    </form>
    </div>
  );
}

export default Register;
