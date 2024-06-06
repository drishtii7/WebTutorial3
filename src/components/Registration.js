import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, TextField, Button, Typography, Box
} from '@mui/material';
import Navbar from './Navbar';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.match(/^[A-Za-z]+$/)) {
      tempErrors.firstName = 'First Name can only contain letters';
    }
    if (!formData.lastName.match(/^[A-Za-z]+$/)) {
      tempErrors.lastName = 'Last Name can only contain letters';
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      tempErrors.email = 'Email is not valid';
    }
    if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/profile', { state: formData });
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 5,
            p: 3,
            bgcolor: '#f5f5f5',
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          <Typography variant="h4" gutterBottom>Register</Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              margin="normal"
            />
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              margin="normal"
            />
            <Box display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Register</Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Registration;
