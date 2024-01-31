import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { serverURL } from '../../../administrator/services/FetchNodeServices';
import PlusMinusComponenat from "../../componenat/PlusMinusComponenat"
import { useDispatch } from 'react-redux';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function Card3({cartData,pageRefresh}) {
   var dispatch=useDispatch()
  const handleQtyChange=(selectedProduct,value)=>
  {  var product=selectedProduct  
      
    if(value>=1)
   {
   
   
   product['qty']=value
   
   dispatch({type:'ADD_PRODUCT',payload:[product.productlistid,product]})
   }
   else
   { product['qty']=0
     dispatch({type:'DELETE_PRODUCT',payload:[product.productlistid,product]})
   }
   pageRefresh()
  }
    return (
    

      cartData.map((item)=>{
        return(
        <Card sx={{ maxWidth: 800, display: 'flex' }} style={{ width: 1000, height: 170 , }} spacing={2}>

                <CardMedia item xs={4}
                    component="img"
                    style={{ width: 100, height: 100, marginTop: 20 }}
                  src={`${serverURL}/images/${item.picture}`}
                />
                                   
 
               
                 <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               
                
        <CardContent sx={{ flex: '1 0 auto' }}>
      
          <div component="div" variant="h5" style={{margintop:20}}>
         
         {item.productlistname}  <space style={{margin:'120%'}}> </space>
           
          </div>
          <Typography component="div" variant="h5" >
          {item.offer>0?<div>&#8377;{item.offer}{item.weight}</div>:<div>&#8377;{item.offer}{item.qty}</div>}
                                    <div>{item.weight}</div>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {item.qty}
          </Typography>
         
         
        </CardContent>
        <Typography component="div" variant="h5" style={{fontWeight:"bold",}}>
        {item.offer>0?<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><s>&#8377; {item.rate*item.qty}</s><div style={{paddingLeft:'4px'}}>&#8377; {item.offer*item.qty}</div></div>:
                                      <div style={{display:'flex',justifyContent:'center',alignItems:'center',}}><div>&#8377; {item.rate*item.qty}</div></div>}
                              
         
          </Typography>
          <space style={{marginLeft:'400%',marginTop:"-30%",}}><PlusMinusComponenat  qty={item?.qty}  onChange={(value)=>handleQtyChange(item,value)} /></space>

        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}> 
        </Box>
        
      </Box>
   
      
    </Card >
       ) })
 
 );
}