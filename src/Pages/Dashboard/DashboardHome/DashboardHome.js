import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointsments from '../Appointments/Appointsments';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={5} >
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>

            <Grid item xs={12} sm={4} md={7}>
                <Appointsments date={date}></Appointsments>
            </Grid>

        </Grid>
    );
};

export default DashboardHome;