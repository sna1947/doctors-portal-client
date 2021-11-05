import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background:`url(${bg})`, 
    marginTop:130,
    backgroundColor:'rgba(54, 60, 65, 0.9)',
    backgroundBlendMode:'darken, luminosity',
};

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                 
                <Grid item xs={12} md={6}>
                <img style={{width:400, marginTop:'-110px'}} src={img} alt="" />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box>
                    <Typography variant='h6'sx={{m:3}} style={{color:'white', fontSize:25,fontWeight:600}}>
                       Appointment
                    </Typography>
                    <Typography variant='h4'style={{color:'white', fontSize:40,fontWeight:600}}>
                       Make an Appointment Today
                    </Typography>
                    <Typography variant='h4' sx={{m:3}} style={{color:'white', fontSize:14,fontWeight:300}}>
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores tempore laudantium impedit excepturi consequuntur accusamus fugiat error ipsum eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vitae saepe vel est quisquam aliquam praesentium quaerat fuga voluptas perspiciatis.
                    </Typography>
                    <Button variant="contained">Learn More...</Button>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;