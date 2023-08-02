import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyAppContext } from './App';
import { Button, Modal, Box, Typography } from '@mui/material';
import loader from '../Images/loader.gif';
import loginImage from "../Images/loginimage.webp"
import "../Styles/login.css"




function Login() {


  const { setLogin, } = useContext(MyAppContext)


  const navigate = useNavigate();


  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const storedName = localStorage.getItem('name');
    const storedPassword = localStorage.getItem('password');

    if (name === (storedName ) && password === storedPassword) {
      // setTimeout(() => {
      //   setLogin(true)
      //   if (cartItem.length === 0) {
      //     navigate("/meesho")
      //   } else {
      //     navigate('/payment');
      //   }
      // }, 2000);
      setLogin(true)
      setOpen(true);
      setTimeout(()=>{
        navigate("/")
        
      },2500)
    } else {
      alert('Invalid username or password');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
     <div className="bg">
    <form onSubmit={handleSubmit} className='forms'>
      <img src={loginImage} alt='ab' className='loginImage'/>
      <h2 className="payment1">Login</h2>
      <input
        type="text"
        id="cardNumber"
        value={name}
        onChange={handleName}
        placeholder="Enter Username"
        className="inputdata"
        required
      />
      <input
        type="password"
        id="expiryDate"
        value={password}
        onChange={handlePassword}
        placeholder="Enter Your Password"
        className="inputdata"
        required
      />
      <div className="batan">
        <Button className="buttonSubmit" variant="contained" type="submit" style={{ color: 'black', background: 'white' }}>
          Login
        </Button>
        <Button
          onClick={() => navigate('/register')}
          className="buttonSubmit"
          variant="contained"
          type="submit"
          style={{ color: 'black', background: 'white' }}
        >
          New User?
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome...!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Logged in Successfully<br></br>
            
            Redirecting you to home page <br></br>
            <img src={loader} alt='loader' style={{width:"100px",height:"100px",display:'flex',alignItems:"center", justifyContent:"center",margin:"5px auto", padding:"5px 5px"}}/>
          </Typography>
        </Box>
      </Modal>
    </form>
    </div>
  );
}

export default Login;
