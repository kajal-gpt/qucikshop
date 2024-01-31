import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 550,
}));


const message = `Avail Offers/Coupons`;

export default function Card2() {
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
          <Stack>
            <Avatar alt="Icon"
  src="../../assets/persent1.png" 

  style={{ width: 56, height: 56}} 
  variant="rounded"></Avatar>
          </Stack>
          <Stack sx={{ minWidth: "25%" }}  >
            <Typography noWrap style={{ fontFamily: 'Poppins', fontWeight:"bold"}}>{message}</Typography>
          </Stack>      
          <IconButton color="#ff7675" aria-label="add to shopping cart"  >
  <PlayArrowIcon style={{color:"#ff7675" , marginLeft:"1900%"}}/>
</IconButton>
        </Stack>
      </Item>
    </Box>
  );
}