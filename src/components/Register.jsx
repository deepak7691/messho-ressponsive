import React from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  password: Yup.string().required('Password is required'),
});

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // Store user data in localStorage
    localStorage.setItem('name', values.name);
    localStorage.setItem('email', values.email);
    localStorage.setItem('phone', values.phone);
    localStorage.setItem('password', values.password);

    setOpen(true);
    setTimeout(() => {
      setSubmitting(false);
      navigate('/login');
    }, 4000);
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
          email: '',
          phone: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className="payment">New User Registration</h2>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="inputdata"
            />
            <ErrorMessage name="name" component="div" className="error" />

            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="inputdata"
            />
            <ErrorMessage name="email" component="div" className="error" />

            <Field
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone Number"
              className="inputdata"
            />
            <ErrorMessage name="phone" component="div" className="error" />

            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Create Password"
              className="inputdata"
            />
            <ErrorMessage name="password" component="div" className="error" />

            <div className="batan">
              <Button
                className="buttonSubmit"
                variant="contained"
                type="submit"
                style={{ color: 'black', background: 'white' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create Account'}
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
          </Form>
        )}
      </Formik>

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
    </div>
  );
}

export default Register;
