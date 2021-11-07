import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
      id:1,
      name: 'Teeth Orthodonics',
      time:'08.00am - 09.00am',
      space:10,
    },
    {
      id:2,
      name: 'Cosmatic Dentasory',
      time:'09.00am - 10.00am',
      space:10,
    },
    {
      id:3,
      name: 'Teeth clining',
      time:'10.00am - 11.00am',
      space:10,
    },
    {
      id:4,
      name: 'Cavity Protection',
      time:'11.00am - 12.00am',
      space:12,
    },
    {
      id:5,
      name: 'Teeth Orthodonics',
      time:'12.00am - 01.00am',
      space:10,
    },
    {
      id:6,
      name: 'Teeth Orthodonics',
      time:'01.00am - 02.00am',
      space:18,
    },
]

const AvailableApointment = ({date}) => {
  const [bookingSuccess, setBookingSuccess] = useState(false)
    
    return (
        <Container>

            <Typography variant= "h4" sx={{bgcolor: 'warning.main',mb:4, fontWeight:600 }}>
            AvailableApointment: On {date.toDateString()}
            </Typography>

        { bookingSuccess && <Alert severity="success">user successfully booked the day</Alert>}
            

            <Grid container spacing={2}>   
               {
                   bookings.map(booking=><Booking
                   key={booking.id}
                   booking={booking}
                   date={date}
                   setBookingSuccess={setBookingSuccess}
                   ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default AvailableApointment;