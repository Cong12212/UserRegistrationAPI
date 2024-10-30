// src/components/Register.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/user/register', data);
            toast.success(response.data.message); // Hiển thị thông báo thành công
        } catch (error) {
            toast.error(error.response ? error.response.data.message : 'An error occurred'); // Hiển thị thông báo lỗi
        }
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ''}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Register
                </Button>
            </form>
            <ToastContainer /> {/* Thêm ToastContainer để hiển thị thông báo */}
        </Container>
    );
};

export default Register;
