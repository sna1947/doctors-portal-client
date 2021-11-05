import React from 'react';
import Navication from '../../Shared/Navication/Navication';
import AppointmentHeader from '../AppointHeader/AppointmentHeader';
import AvailableApointment from '../AvailableApointment/AvailableApointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navication></Navication>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableApointment date={date}></AvailableApointment>
        </div>
    );
};

export default Appointment;