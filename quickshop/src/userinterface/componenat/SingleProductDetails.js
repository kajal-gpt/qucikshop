import React,{createRef} from "react";
import Slider from "react-slick";
import { useMediaQuery,Paper, Button } from "@mui/material";
import {serverURL} from '../../administrator/services/FetchNodeServices'
import { useStyles } from "./StyleCss"
import { useNavigate } from "react-router-dom";
export default function SingleProductDetails(props)
{
    const classes=useStyles()
    var item=props.item
    var navigate=useNavigate()
     const handleClick=()=>{
  
   navigate(props.url,{state:{product:item}})

   }
 

  
      return(<div onClick={()=>handleClick(item)}  className={classes.p5}>
        <Paper className={classes.paper} variant="outlined" elevation={2} >
        <div className={classes.img}>
         <img src={`${serverURL}/images/${item.picture}` } width='80%'/>
         </div>
         <div className={classes.divp}>{item.productlistname}</div>
         <div className={classes.p2} >
            <div className={classes.p1}>{item.qty1}</div>
            <div className={classes.p3}>   
            <div className={classes.p4}>   
            <div className={classes.p1}>{item.offer==0?<>&#8377; {item.rate}</>:<s>&#8377; {item.rate}</s>}</div>
            <div className={classes.p1}>{item.offer==0?<></>:<>&#8377; {item.offer}</>}</div>
            </div>
            <div className={classes.p6}>
                <Button variant="outlined" className={classes.p7}>Add</Button>
            </div>
            </div>
         
         </div>
      </Paper>
  </div>)



}