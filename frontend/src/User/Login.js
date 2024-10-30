// src/components/Login.js
import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ở đây bạn có thể xử lý logic đăng nhập nếu cần
        alert('Login form submitted');
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    name="email"
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    name="password"
                    required
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;
