import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyAppContext } from './App';
import { Button, Modal, Box, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loader from '../Images/loader.gif';
import loginImage from '../Images/loginimage.webp';
import '../Styles/login.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

function Login() {
  const { setLogin } = useContext(MyAppContext);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const storedName = localStorage.getItem('name');
    const storedPassword = localStorage.getItem('password');

    if (values.name === storedName && values.password === storedPassword) {
      setLogin(true);
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2500);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg">
      <Formik
        initialValues={{
          name: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="forms">
            <img src={loginImage} alt="ab" className="loginImage" />
            <h2 className="payment1">Login</h2>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter Username"
              className="inputdata"
            />
            <ErrorMessage name="name" component="div" className="error" />

            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              className="inputdata"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error"
            />

            <div className="batan">
              <Button
                className="buttonSubmit"
                variant="contained"
                type="submit"
                style={{ color: 'black', background: 'white' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
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
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Welcome...!
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  Logged in Successfully<br />
                  Redirecting you to the home page <br />
                  <img
                    src={loader}
                    alt="loader"
                    style={{
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '5px auto',
                      padding: '5px 5px',
                    }}
                  />
                </Typography>
              </Box>
            </Modal>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
