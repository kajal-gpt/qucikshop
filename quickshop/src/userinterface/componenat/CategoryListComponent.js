import { useState } from "react";
import { AppBar,Toolbar,Grid, Paper, Avatar, Button } from "@mui/material";
import { serverURL } from "../../administrator/services/FetchNodeServices";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import { useStyles } from "./StyleCss";
export default function CategoryListComponent({data,getSubCategoryId}){
  const classes=useStyles()
    const navigate=useNavigate()
    const handleClick=(item)=>{
      getSubCategoryId(item.subcategoryid,item.subcategoryname)

    }
    
   const listView=()=>{
    return data.map((item)=>{
   return     <ListItem disablePadding>
   <ListItemButton onClick={()=>handleClick(item)}>
     <ListItemIcon>
     <Avatar className={classes.clc} src={`${serverURL}/images/${item.icon}`}/>
     </ListItemIcon>
     <ListItemText primary ={<span className={classes.lit}>{item.subcategoryname}</span>} />
   </ListItemButton>
   </ListItem>


    })
   }
     
    return(
          <div>
           <div className={classes.div2}>
          
            <Paper elevation={5} className={classes.paper1}>
            <Avatar className={classes.avtar1} src={``}/>
            Top Categories
            </Paper></div>

            <List>
           
           {listView()}
            </List>
           </div>
           )
}