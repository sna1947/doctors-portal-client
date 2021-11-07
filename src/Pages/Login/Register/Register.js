import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registerUser, isLoding, authError } = useAuth();

    const history = useHistory();

    const handeleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handeleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {/* form part =========================================== */}
                <Grid item xs={12} sm={12} md={6}>
                    <Typography sx={{ mt: 18 }} variant="body1" gutterBottom>Register</Typography>

                    {!isLoding && <form onSubmit={handeleRegisterSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            // type='email'
                            onBlur={handeleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onBlur={handeleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-password-input"
                            // id="standard-basic"
                            label="Password"
                            type="password"
                            name='password'
                            autoComplete="current-password"
                            onBlur={handeleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-password-input"
                            // id="standard-basic"
                            label="Re Enter Password"
                            type="password"
                            name='password2'
                            autoComplete="current-password"
                            onBlur={handeleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 2, }} type='submit' variant="contained">Register</Button>

                        <NavLink to='/login'>
                            <Button style={{ textDecoration: 'none' }} >Already Registerd ???   Please Login</Button>
                        </NavLink>
                    </form>}

                    {isLoding && <CircularProgress color="secondary" />}
                    { user?.email && <Alert severity="success">user successfully created
                    </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                {/* image part=========================================================== */}
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;