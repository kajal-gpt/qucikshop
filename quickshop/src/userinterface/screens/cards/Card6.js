import * as React from 'react';
import {useState,useEffect}  from "react"
import { Button, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneNumberPopUp from '../../componenat/popup/PhoneNumberPopup';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 560,
}));


export default function Card6(props) {
  const [status,setStatus]=useState(false)
  var navigate=useNavigate()
  const handleClick=()=>{
  if(props.btnTitle=="Go")  
  setStatus(true)
  else
  navigate('/makepayment')

  }
   const showAddress=()=>{
      return props.userAddress.map((item)=>{
     return(<div style={{flexDirection:'column',display:'flex'}}>
      <div>{item.username}</div>
      <div>{item.addressone}</div>
      <div>{item.addrestwo}</div>
      <div>{item.city},{item.state},{item.zipcode}</div>

     </div>)

      })
    

   }

  return (
    
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} >
  
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
       
      >
        <Stack spacing={2} direction="row" alignItems="center">
         
           <LocationOnIcon style={{color:"#ff7675"}}/>
          
          <Stack sx={{ minWidth: "25%" }}  >
          <p>Your Delivery Address</p>
                      {showAddress()}
      

                    
          </Stack>      
          <Button variant="outlined" color="error" style={{marginLeft:"50%"}} onClick={handleClick}>
          {props.btnTitle} 
      </Button>
      <PhoneNumberPopUp setStatus={setStatus} status={status} setBtnTitle={props.setBtnTitle} setUserAddress={props.setUserAddress} userAddress={props.userAddress} />
        </Stack>
      </Item>
    </Box>
  );
}