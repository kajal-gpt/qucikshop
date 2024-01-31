
import {useState,useEffect} from "react"
import Header from "../../componenat/Header"
import { useStyles } from "../../componenat/StyleCss"
import { Button, Grid } from "@mui/material"
import Card2 from "../cards/Card2"
import Card3 from "../cards/Card3"
import Card4 from "../cards/Card4"
import Card5 from "../cards/Card5"
import Card6 from "../cards/Card6"
import Card7 from "../cards/Card7"
import { useSelector } from "react-redux"

export default function Card1()

{ const [refresh,setRefresh] = useState(false)
  const classes = useStyles()
  const [userAddress,setUserAddress]=useState([])
  const [btnTitle,setBtnTitle]=useState("Go")
  const cart=useSelector((state)=>state.products)
  const cartData=Object.values(cart)
  const pageRefresh=()=>{
setRefresh(!refresh)
  }
    return(
        <Grid >
         
          <Header /> 
          <Grid container >
         
            <Grid  item xs={4}>
        <div className={classes.componant1}>
          <Grid container style={{alignItems:"center", fontWeight:9,fontSize:30,marginLeft:"10%",justifyContent:"center",fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 25}}>
          Cart({cartData.length} Items)
          <space>
          <Button variant="outlined" color="error" style={{marginLeft:"1000%"}}>
       Empty 
      </Button>
          </space>
          </Grid>
        
        </div>
        <Grid className={classes.componant2}>
          <Card3 cartData={cartData} pageRefresh={pageRefresh}/>
        </Grid>
        </Grid>
        <Grid item xs={5}>
        <div className={classes.componant}>
        <Card2 />
        
        </div>
       
        <div className={classes.componant3}>
        <Card4 pageRefresh={pageRefresh}/>
        </div>
        <div className={classes.componant4}>
          <Card5 />
        </div>
        <div className={classes.componant5}>
          <Card6 btnTitle={btnTitle} setBtnTitle={setBtnTitle} setUserAddress={setUserAddress} userAddress={userAddress}/>
        </div>
        <div className={classes.componant6}>
        
        </div>
        </Grid>

          
          </Grid>
        </Grid>
    )
}