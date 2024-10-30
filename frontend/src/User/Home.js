// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h3" gutterBottom>
                Welcome to the User Registration App
            </Typography>
            <Typography variant="h6" gutterBottom>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary" style={{ margin: '0 10px' }}>
                        Login
                    </Button>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ margin: '0 10px' }}>
                        Register
                    </Button>
                </Link>
            </Typography>
        </Container>
    );
};

export default Home;
