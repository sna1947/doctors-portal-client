import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handeleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handeleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return;
        }

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography sx={{ mt: 18 }} variant="body1" gutterBottom>Register</Typography>
                    <form onSubmit={handeleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onChange={handeleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-password-input"
                            // id="standard-basic"
                            label="Password"
                            type="password"
                            name='password'
                            autoComplete="current-password"
                            onChange={handeleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-password-input"
                            // id="standard-basic"
                            label="Re Enter Password"
                            type="password"
                            name='password2'
                            autoComplete="current-password"
                            onChange={handeleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 2, }} type='submit' variant="contained">Register</Button>

                        <NavLink to='/login'>
                            <Button style={{ textDecoration: 'none' }} >Already Registerd ???   Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;