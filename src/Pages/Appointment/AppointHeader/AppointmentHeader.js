import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';



const AppointmentHeader = ({date, setDate}) => {
    return (
        
        <Container>
            <Grid container spacing={2}>
                
                <Grid item xs={6} md={8}>
                   <Calender date={date} setDate={setDate}></Calender>
                </Grid>

                <Grid item xs={6} md={4}>
                   <img style={{width:'100%'}} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>


    );
};

export default AppointmentHeader;