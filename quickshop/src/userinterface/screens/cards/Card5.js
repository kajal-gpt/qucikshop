import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function Card5() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 798,
          height: 220,
        },
      }}
      style={{marginLeft:"-46%"}}
    >
      
      <Paper elevation={3} >
        <div style={{marginTop:'3%',marginLeft:"5%",fontSize:"160%",fontWeight:"bold",fontFamily: 'Poppins'}}>
            Delivery Partner Tip
        </div>
        <div style={{text:'mute',marginTop:'3%',marginLeft:"5%"}}> 
            This Enter Amount Will Be Sent To Your Delivery Partner
        </div>
        <div style={{marginTop:"6%",marginLeft:"25%", justifyContent:"space-between"}} direction="row">
        <Button variant="outlined" color="error" style={{marginLeft:"1%"}}>
        ₹10
      </Button>
      <Button variant="outlined" color="error" style={{marginLeft:"1%"}}>
        ₹20
      </Button>
      <Button variant="outlined" color="error" style={{marginLeft:"1%"}}>
        ₹30
      </Button>
      <Button variant="outlined" color="error" style={{marginLeft:"1%"}}>
        ₹50
      </Button>
      <Button variant="outlined" color="error" style={{marginLeft:"1%"}}>
        ₹100
      </Button>
        </div>
      </Paper>
    </Box>
  );
}
