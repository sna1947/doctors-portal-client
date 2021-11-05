import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

 const services = [
     {
      name:'Fluoride Treatment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos dolores suscipit accusantium maiores autem voluptatum dolorum. Vitae, dolorem, et ab beatae aspernatur, deserunt suscipit quo accusantium nam commodi voluptate facere ipsa hic!',
      img:fluoride,
     },
     {
      name:'cavity Treatment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos dolores suscipit accusantium maiores autem voluptatum dolorum. Vitae, dolorem, et ab beatae aspernatur, deserunt suscipit quo accusantium nam commodi voluptate facere ipsa hic!',
      img:cavity,
     },
     {
      name:'whitening Treatment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos dolores suscipit accusantium maiores autem voluptatum dolorum. Vitae, dolorem, et ab beatae aspernatur, deserunt suscipit quo accusantium nam commodi voluptate facere ipsa hic!',
      img:whitening,
     },
 ];
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            
      <Container>
      <Typography sx={{ fontWeight:500, color: 'success.main', m:3, }} variant='h6' component='div'>
        Our Services
     </Typography>
      <Typography sx={{ fontWeight:600, m:2 }} variant='h4' component='div'>
        Services We Provide
     </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
        services.map(service=><Service
             key={service.name}
             service={service}
             ></Service>)
         }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;