import React, { useContext, useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/payment.css';
import { useNavigate } from 'react-router-dom';
import { MyAppContext } from './App';
import loader from '../Images/loader.gif';

const PaymentSchema = Yup.object().shape({
  cardNumber: Yup.string().required('Required'),
  expiryDate: Yup.string().required('Required'),
  cvv: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

function PaymentPage() {
  const navigate = useNavigate();
  const { setCount } = useContext(MyAppContext);
  const [open, setOpen] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setOpen(true);
    setTimeout(() => {
      navigate('/');
      setCount(0);
      setOpen(false);
    }, 4000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg">
      <Formik
        initialValues={{
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          address: '',
        }}
        validationSchema={PaymentSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className="payment">Payment Details</h2>
            <Field
              type="number"
              name="cardNumber"
              placeholder="Enter Card Number"
              className="inputdata"
            />
            <ErrorMessage name="cardNumber" component="div" className="error" />

            <Field
              type="text"
              name="expiryDate"
              placeholder="Enter Expiry Date"
              className="inputdata"
            />
            <ErrorMessage name="expiryDate" component="div" className="error" />

            <Field
              type="number"
              name="cvv"
              placeholder="Enter CVV"
              className="inputdata"
            />
            <ErrorMessage name="cvv" component="div" className="error" />

            <Field
              type="text"
              name="address"
              placeholder="Enter Your Address"
              className="inputdata"
            />
            <ErrorMessage name="address" component="div" className="error" />

            <Button
              className="buttonSubmit"
              variant="contained"
              type="submit"
              style={{ color: 'black', background: 'white', margin: '15px auto' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Pay Now'}
            </Button>
          </Form>
        )}
      </Formik>

      {/* Modal */}
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
            Your Order is placed Successfully<br />
            Redirecting you to home page <br />
            <img src={loader} alt='loader' style={{ width: "100px", height: "100px", display: 'flex', alignItems: "center", justifyContent: "center", margin: "5px auto", padding: "5px 5px" }} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default PaymentPage;
