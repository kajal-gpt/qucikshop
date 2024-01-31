import React,{createRef} from "react";
import Slider from "react-slick";
import { useStyles } from "./StyleCss";
import { UseMediaQueryOptions, useMediaQuery } from "@mui/material";
import {serverURL} from '../../administrator/services/FetchNodeServices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export default function CircleScrollComponent(props)

{  const navigate=useNavigate() 
   const theme = useTheme();
   const sm = useMediaQuery(theme.breakpoints.down('sm'));
   const lg = useMediaQuery(theme.breakpoints.down('lg'));
   const md = useMediaQuery(theme.breakpoints.down('md'));
     
  const classes=useStyles()
  var sliderRef=createRef()
    var color=['#fab1a0','#81ecec','#ffeaa7','#dfe6e9','#fd79a8','#f7f1e3','#ccae62','#786fa6','#cf6a87']
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: sm?3:md?3:lg?4:6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

      };
 var images=[
    {id:1,images:'Detergent.png',name:'Detergent'},
    {id:2,images:'rice.png',name:'Rice'},
    {id:3,images:'Edible oil.png',name:'Edible Oils'},
    {id:4,images:'Dairy.png',name:'Dairy & Bakery'},
    {id:5,images:'SaltSugar.png',name:'Salt & Sugar'},
    {id:6,images:'indianspices.png',name:'Indian Masala'},
    {id:2,images:'rice.png',name:'Rice'},
    {id:3,images:'Edible oil.png',name:'Edible Oils'},
    {id:5,images:'SaltSugar.png',name:'Salt & Sugar'},
    {id:6,images:'indianspices.png',name:'Indian Masala'},

]
const showImages=()=>{

  return props.category.map((item)=>{
    return(<div  onClick={()=>handleClick(item)} className={classes.circle}>
      <div style={{padding:2,display:'flex',justifyContent:'center',alignItems:'center',width:sm?90:180,height:sm?90:180,borderRadius:sm?45:90,background:color[parseInt(Math.random()*(color.length-1))]}}>
       <img src={`${serverURL}/images/${item.icon}` } width='80%'/>
       </div>
       <div style={{fontFamily:'Poppins',fontSize:sm?10:14,fontWeight:700,margin:5,textAlign:'center',width:sm?90:180}}>{item.categoryname}</div>
    </div>)

  })  
}
const handleBackClick=()=>{
  sliderRef.current.slickPrev()
}

const handleForwardClick=()=>{
    sliderRef.current.slickNext()

}
const handleClick=(item)=>
{
navigate("/productviewwithcategory",{state:{categoryid:item.categoryid}})
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