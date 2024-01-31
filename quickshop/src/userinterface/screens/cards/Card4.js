import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import {useState,useEffect}  from "react"


export default function Card4(props) {
  useEffect(function(){ 
    props.pageRefresh() 
 
  })
 
  const cart=useSelector((state)=>state.products)
  const cartData=Object.values(cart)
  var totalOffer=cartData.reduce((p1,p2)=>{
 return p1+(p2.offer*p2.qty)
  },0)  
 
  var totalAmount=cartData.reduce((p1,p2)=>{
    return p1+(p2.rate*p2.qty)
     },0)  
    var totalSaving=totalAmount- totalOffer

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 160,
        },
      }}
    >
     
      <Paper elevation={3} style={{marginLeft:"22%" ,width:"80%",padding:"3%"}} >
    <div style={{marginLeft:"5%",marginTop:"2%",fontWeight:"bold"}}>Item Total <space style={{marginLeft:"60%",marginTop:""}}><s>&#8377;{totalAmount}</s></space><space style={{marginLeft:"5%",fontWeight:600, color:"red"}}>&#8377;{totalOffer}</space></div>
    <div style={{marginLeft:"5%",marginTop:"2%",fontWeight:"bold",color:"gray"}}>Hendling Charges<space style={{color:"#3ae374"}}>(₹10 saved)</space> <space style={{marginLeft:"34%",}}><s> ₹20</s></space><space style={{marginLeft:"8%",fontWeight:600, color:"#3ae374"}}>₹10</space></div>
    <div style={{marginLeft:"5%",marginTop:"2%",fontWeight:"bold",color:"gray"}}>Delivery Free<space style={{color:"#3ae374"}}>(₹35 saved)</space> <space style={{marginLeft:"41%",}}><s> ₹35</s></space><space style={{marginLeft:"8%",fontWeight:600, color:"#3ae374"}}>₹0</space></div>
    <div style={{marginLeft:"5%",marginTop:"2%",fontWeight:700, fontSize:30,fontStyle:"inherit"}}>To Pay <space style={{marginLeft:"50%" ,}}>₹{totalOffer}</space></div>


      </Paper>
    </Box>
  );
}