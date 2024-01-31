import { useEffect,useState } from "react";
import { Button } from "@mui/material";
import { useStyles } from "./StyleCss";

export default function PlusMinusComponent(props){
    console.log("QTTTTTTY",props.qty)   
    const classes=useStyles() 
    const [value,setValue]=useState()
    useEffect(()=>{
        setValue(props.qty)
    },[props])
    const handlePlusClick=()=>{
        
        setValue((prev)=>{
            if(prev<5)
            { props.onChange(prev+1)
            return prev+1}
            else 
            { props.onChange(prev)
                return prev}
        })
    }
    const handleMinusClick=()=>{
        setValue((prev)=>{
            if(prev>=1)
            { props.onChange(prev-1)
                return prev-1}
            
            })
    
    
    }
    return(<div>
        <div className={classes.pmc}>
                  {value==0?<Button onClick={handlePlusClick} variant='outlined' color='success' >ADD</Button>:
                  <div className={classes.pmc1}>
                   <div onClick={handlePlusClick} className={classes.pmc2} >+</div>
                   <div className={classes.pmc3} >{value}</div>
                   <div onClick={handleMinusClick}  className={classes.pmc4}>-</div>
                  </div>}
               </div>
       </div>)
}