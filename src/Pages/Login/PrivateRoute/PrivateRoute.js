 
import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

 
// const PrivateRoute = (props) => {
// const {children, ...rest} = props;
const PrivateRoute = ({children, ...rest}) => {
   
    const {user, isLoding} = useAuth();

    if(isLoding){return <CircularProgress/>}

    return (
        <Route
        {...rest}
        render = {({location})=>user.email ? children :
        <Redirect  to={{
            pathname: "/login",
            state: { from: location }
          }}
          ></Redirect>}
        ></Route>
    );
};
export default PrivateRoute;
