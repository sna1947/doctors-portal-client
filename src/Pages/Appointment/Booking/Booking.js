import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space} =booking;      //or>>>>>>
// const Booking = (props) => {
//     const {name, time, space} = props.booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ py: 5, }}>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: 'info.main' }}>
                        Type: {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Time: {time}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Slot: {space}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="outlined">Booking Now</Button>
                </Paper>

            </Grid>
            <BookingModal
            date={date}
            booking={booking}
             openBooking={openBooking}
             handleBookingClose={handleBookingClose}
             setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;