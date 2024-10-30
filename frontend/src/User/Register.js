import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/user/register', data);
            alert(response.data.message);
        } catch (error) {
            alert(error.response ? error.response.data.message : 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email', { required: 'Email is required' })} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...register('password', { required: 'Password is required' })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
