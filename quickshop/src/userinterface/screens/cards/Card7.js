import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
export default function Card7() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 798,
          height: 100,
        },
      }}
      style={{marginLeft:"-46%"}}
    >
      
      <Paper elevation={3} >
        <div style={{marginTop:'3%',marginLeft:"5%"}}>
        <Avatar alt="Icon"
src="../../assets/zeptonian-riding.webp" 

style={{ width: 88, height: 60}} 
variant="rounded">      </Avatar>  
        <div style={{marginLeft:"23%",marginTop:"-9%",fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 25}}>
        See how we ensure our delivery partner’s safety Learn more

        </div>
       
        </div>
        
      </Paper>
    </Box>
  );
}