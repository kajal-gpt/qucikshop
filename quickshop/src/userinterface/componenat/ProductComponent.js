import React,{createRef} from "react";
import { Button, Paper } from "@material-ui/core";
import Slider from "react-slick";
import { useStyles } from "./StyleCss";
import { UseMediaQueryOptions, useMediaQuery } from "@mui/material";
import {serverURL} from '../../administrator/services/FetchNodeServices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

export default function ProductComponent(props)

{  
   const theme = useTheme();
   const sm = useMediaQuery(theme.breakpoints.down('sm'));
   const lg = useMediaQuery(theme.breakpoints.down('lg'));
   const md = useMediaQuery(theme.breakpoints.down('md'));
   const xs = useMediaQuery(theme.breakpoints.down('xs'));
     
  const classes=useStyles()
  var sliderRef=createRef()
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: xs?1:sm?2:md?3:lg?4:7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

      };

const showImages=()=>{

    return props.products.map((item)=>{
      return(<div className={classes.p5}>
        <Paper className={classes.paper} variant="outlined" elevation={2} >
        <div className={classes.img}>
         <img src={`${serverURL}/images/${item.picture}` } width='80%'/>
         </div>
         <div className={classes.divp}>{item.productlistname}</div>
         <div className={classes.p2} >
            <div className={classes.p1}>{item.qty}</div>
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

    })
}
const handleBackClick=()=>{
  sliderRef.current.slickPrev()
}

const handleForwardClick=()=>{
    sliderRef.current.slickNext()

}

    return(
 <div>
 <div className={classes.button}>
 <div className={classes.title}>
 {props.title}
 </div>
{!lg?<> <div className={classes.icons}>
 <div>
  <ArrowBackIosNewIcon className={classes.arrowicon1} onClick={handleBackClick} />   
 </div>
 <div>
 <ArrowForwardIos  className={classes.arrowicon1} onClick={handleForwardClick} />   
 </div>
 </div>  </>:<></> }
</div>
<Slider {...settings} ref={sliderRef}>
    {showImages()}  
</Slider>

 </div>   
    )
}