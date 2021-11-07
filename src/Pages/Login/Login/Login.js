import { Button, Container, Grid, TextField, Typography,Alert,CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory,useLocation } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,loginUser,isLoding,authError}=useAuth();

    const location = useLocation();
    const history = useHistory();

    const handeleOnChange = e =>{
         const field = e.target.name;
         const value = e.target.value;
         console.log(field, value);

         const newLoginData = {...loginData};
         newLoginData[field] = value;
         setLoginData(newLoginData); 
    }
    const handeleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
        // alert('form submited')
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography sx={{mt:18}} variant="body1" gutterBottom> Login</Typography>
                    <form onSubmit={handeleLoginSubmit}>
                        <TextField
                            sx={{width:'75%',m:1}}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            onChange={handeleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{width:'75%'}}
                            id="standard-password-input"
                            // id="standard-basic"
                            label="Your Password"
                            type="password"
                            name='password'
                            autoComplete="current-password"
                            onChange={handeleOnChange}
                            variant="standard"/>

                            <Button sx={{width:'75%', m:2,}} type='submit' variant="contained">Login</Button>

                            <NavLink to='/register'>
                               <Button style={{textDecoration:'none'}} >New User ??? Please Register</Button>
                            </NavLink>
                    </form>
                    {isLoding && <CircularProgress color="secondary" />}
                    { user?.email && <Alert severity="success">user successfully logedin
                    </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>
            </Grid>
        </Container>

    );
};
export default Login;