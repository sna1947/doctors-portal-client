import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { Email } from '@mui/icons-material';

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

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const {user} = useAuth();
    const initialInfo = {patientName:user.displayName, email:user.email, phone:''};
    const [bookingInfo, setBookingInfo]= useState(initialInfo);

    const handaleOnBlur = e =>{
     const field = e.target.name;
     const value = e.target.value;
     const newInfo = {...bookingInfo};
     newInfo[field] = value;
     console.log(newInfo)
     setBookingInfo(newInfo);
    }
    


    const handelBookingSubmit = e =>{
        const appointMent= {
            ...bookingInfo,
            time,
            serviceName:name,
            date:date.toLocaleDateString()
        }

        fetch('http://localhost:5000/appointments',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(appointMent)
        })
         .then(res => res.json())
         .then(data =>{
             if(data.insertedId){
                setBookingSuccess(true)
                handleBookingClose()
             }
         })

        console.log(appointMent)
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
                        name='patientName'
                        onBlur={handaleOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                    />

                    <TextField
                        
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        name='email'
                        onBlur={handaleOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />

                    <TextField
                        
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        name='phone'
                        onBlur={handaleOnBlur}
                        defaultValue="phone number"
                        size="small"
                    />
                    {/* <TextField
                        
                        sx={{width:'90%'}}
                        id="outlined-size-small"
                        defaultValue="address"
                        size="small"
                    /> */}
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