import React,{createRef} from "react";
import { useStyles } from "./StyleCss";
import Slider from "react-slick";
import {serverURL} from '../../administrator/services/FetchNodeServices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function BannerComponent(props)

{  const classes = useStyles() 
  const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  var sliderRef=createRef()
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

      };
      
const showImages=()=>{

    return props.images.map((item)=>{
      return(<div>
         <img src={`${serverURL}/images/${item}` } width='100%'/>
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
 <div className={classes.setting}>
{matches?<> <div className={classes. arrow2}>
 <ArrowBackIosNewIcon className={classes.arrowicon} onClick={handleBackClick} />   
 </div></>:<></>}
<Slider {...settings} ref={sliderRef}>
    {showImages()}  
</Slider>
{matches?<> <div className={classes.second}>
 <ArrowForwardIos className={classes.arrowicon} onClick={handleForwardClick} />   
 </div></>:<></> } 
 </div>   
    )
}