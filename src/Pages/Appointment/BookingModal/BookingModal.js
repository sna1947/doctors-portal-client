import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;

    const handelBookingSubmit = e =>{
        e.preventDefault();
        handleBookingClose();
        alert('submited succfully');
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"

            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {time}
                </Typography> */}
                <form onSubmit={handelBookingSubmit}>
                    <TextField
                        disabled
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        defaultValue="your name"
                        size="small"
                    />
                    <TextField
                        
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        defaultValue="email"
                        size="small"
                    />
                    <TextField
                        
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        defaultValue="phone number"
                        size="small"
                    />
                    <TextField
                        
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        defaultValue="address"
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button  sx={{m:2}} type="submit" variant="contained">Contained</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;