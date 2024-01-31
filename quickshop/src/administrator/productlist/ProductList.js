import { Grid, TextField,FormControl,InputLabel,Select,MenuItem, IconButton,Avatar, Button } from "@mui/material";
import React, { useState,useEffect } from "react";
import { useStyles } from "./ProductListCss";
import { PhotoCamera } from "@mui/icons-material";
import { postData,getData } from "../services/FetchNodeServices";
import Swal from "sweetalert2";
import ViewListIcon from '@mui/icons-material/ViewList'; 
import { useNavigate } from 'react-router-dom';



export default function ProductInterface(){
  const navigate = useNavigate()
  const classes = useStyles()
  const [categoryId,setCategoryId] =useState()
  const [categoryList,setCategoryList] =useState([])
  const [subCategoryList, setSubCategoryList] = useState([])
  const [subcategoryId,setSubCategoryId] =useState('')
  const [productId,setProductId] =useState('')
  const [productList,setProductListId] =useState([])
  const [productListName,setProductListName] =useState('')
  const [description,setDescription] =useState('')
  const [rate,setRate] =useState('')
  const [offer,setOffer] =useState('')
  const [qty,setQty] =useState('')
  const [stock,setStock] =useState('')
  const [status,setStatus] =useState('')
  const [type,setType] =useState('')
  const [picture,setPicture]=useState({file:'/assets/shopping-cart.png',bytes:''})
  const [error,setError] = useState({})
  
/*fill drop down */
useEffect(function(){
  fetchAllCategory()
},[])
const fetchAllCategory=async()=>{
  var result=await getData("category/category_list")
  setCategoryList(result.data)
}
const fetchAllSubcategory=async(cid)=>{
  var result=await postData("subcategory/subcategorylist_by_categoryid",{categoryid:cid})
  setSubCategoryList(result.data)
}
const handleCategoryChange=(event)=>{
  setCategoryId(event.target.value)
  fetchAllSubcategory(event.target.value)
}

const fetchAllProduct=async(subid)=>{
  var result=await postData("product/product_list_by_subcategoryid",{subcategoryid:subid})
  setProductListId(result.data)
}
const handleSubcategoryChange=(event)=>{
  setSubCategoryId(event.target.value)
  fetchAllProduct(event.target.value)
}
const fillCategory=()=>{
  return categoryList.map((item)=>{
  return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
  })
}
const fillSubcategory=()=>{
  return subCategoryList.map((item)=>{
  return <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
  
  })
}
const fillProduct=()=>{
  return productList.map((item)=>{
  return <MenuItem value={item.productid}>{item.productname}</MenuItem>
  
  })
}
   
  


    const handlePicture=(event)=>{
        setPicture({file:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})
        handleError('picture',null)
    }
 
    const handleError=(input,value)=>{
    setError((prev)=>({...prev,[input]:value}))
    
    }

    const validation=()=>{
      var isValid=true
      if(!categoryId)
      {  handleError('categoryId','Pls input category name...')
        isValid=false
      }
      if(!subcategoryId)
      {  handleError('subcategoryId','Pls input category name...')
        isValid=false
      }
      if(!productId)
      {  handleError('productId','Pls input category name...')
        isValid=false
      }
      if(!productListName)
      {  handleError('productListName','Pls input Product List name...')
        isValid=false
      }
      if(!description)
      {  handleError('description','Pls input Discription...')
        isValid=false
      }
      if(!rate)
      {  handleError('rate','Pls input rate...')
        isValid=false
      }
      if(!offer)
      {  handleError('offer','Pls input Offer...')
        isValid=false
      }
      if(!qty)
      {  handleError('qty','Pls input Quantity...')
        isValid=false
      }
      if(!stock)
      {  handleError('stock','Pls input Stock...')
        isValid=false
      }
      
      if(!status)
      {  handleError('status','Pls input  status...')
        isValid=false
      }
      if(!picture.bytes)
      {
        handleError('picture','Pls select Picture for category...')
        isValid=false
        
      }
      
  
      return isValid
    }



    const handleClick=async()=>{
      if(validation())
      { var formData=new FormData()
       
         formData.append('categoryid',categoryId)
         formData.append('subcategoryid',subcategoryId)
         formData.append('productid',productId)
         formData.append('productlistname',productListName)
         formData.append('description',description)
         formData.append('rate',rate)
         formData.append('offer',offer)
         formData.append('qty',qty+""+type)
         formData.append('stock',stock)
         formData.append('picture',picture.bytes)
         formData.append('status',status)
            var result=await postData('productlist/productlistsubmit',formData)
        if(result.status){
         Swal.fire({
        
           icon: 'success',
           title: result.message,
           showConfirmButton: true,
     
         })
       }
       else{
         Swal.fire({
         
           icon: 'error',
           title: result.message,
           showConfirmButton: false,
           timer: 1500
         })
       } 
      }
      
    }


    return(<div className={classes.container}>
        <div className={classes.box}>
        <Grid container spacing={2}>
        <Grid item xs={12} style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div className={classes.headingStyle}>Add New Product</div>
        <div>
      <ViewListIcon  onClick={()=>navigate("/dashboard/displayallproductlist")}/>
     </div>
        </Grid>
        <Grid item xs={4}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={categoryId}
        label="Categories"
        onChange={handleCategoryChange}
        onFocus={()=>handleError('categoryid',null)}
        error={error.categoryid?true:false}
        >
             <MenuItem>Select Category</MenuItem>
            {fillCategory()}
        </Select>
        </FormControl>
        <div className={classes.errorText}>{error.categoryid}</div>  
        </Grid>
        <Grid item xs={4}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sub Categories</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={subcategoryId}
        label="SubCategories"
        onChange={handleSubcategoryChange}
        onFocus={()=>handleError('subcategoryid',null)}
        error={error.subcategoryid?true:false}
        >
            <MenuItem>Select Sub Category</MenuItem>
            {fillSubcategory()}
        </Select>
        </FormControl>
        <div className={classes.errorText}>{error.subcategoryid}</div>  
        </Grid>
        <Grid item xs={4}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productId}
              label="Products"
              
              onChange={(event)=>{setProductId(event.target.value)}}
              onFocus={()=>handleError("productid", null)}
              error={error.productId?true:false}
            >
              <MenuItem>Select Product</MenuItem>
              {fillProduct()}
              </Select>
              </FormControl> 
              </Grid>
        <Grid item xs={6}>
        <TextField error={error.productListName?true:false} helperText={error.productListName} onFocus={()=>handleError('productListName',null)} onChange={(event)=>{setProductListName(event.target.value)}} label="Product List Name" variant='outlined' fullWidth/>
            </Grid>
            <Grid item xs={6}>
            <TextField error={error.description?true:false} helperText={error.description} onFocus={()=>handleError('description',null)} onChange={(event)=>{setDescription(event.target.value)}} label="Description" variant='outlined' fullWidth/>
            </Grid>
            <Grid item xs={6}>
            <TextField error={error.rate?true:false} helperText={error.rate} onFocus={()=>handleError('rate',null)} onChange={(event)=>{setRate(event.target.value)}} label="Rate" variant='outlined' fullWidth/>
            </Grid>
            <Grid  item xs={6}>
            <TextField error={error.offer?true:false} helperText={error.offer} onFocus={()=>handleError('offer',null)} onChange={(event)=>{setOffer(event.target.value)}} label="Offer" variant='outlined' fullWidth/>
            </Grid>
            <Grid item xs={6}>
            <TextField error={error.qty?true:false} helperText={error.qty} onFocus={()=>handleError('qty',null)} onChange={(event)=>{setQty(event.target.value)}} label="Weight" variant='outlined' fullWidth/>
            </Grid>
            <Grid item xs={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        label="Type"
        onChange={(e)=>setType(e.target.value)}
        onFocus={()=>handleError('type',null)}
        error={error.status?true:false}
        >
        <MenuItem  >-Select Type-</MenuItem>
        <MenuItem value='kg' >Kg</MenuItem>
        <MenuItem value='ltr'>ltr</MenuItem>
        <MenuItem value='ml'>ml</MenuItem>
        <MenuItem  value='g'>g</MenuItem>
        <MenuItem value='pcs'>Pcs</MenuItem>
        </Select>
        </FormControl>
        <div className={classes.errorText}>{error.status}</div>
        </Grid>
            <Grid item xs={6}>
            <TextField error={error.stock?true:false} helperText={error.stock} onFocus={()=>handleError('stock',null)} onChange={(event)=>{setStock(event.target.value)}} label="Stock" variant='outlined' fullWidth/>
            </Grid>

        <Grid item xs={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={status}
        label="status"
        onChange={(event)=>{setStatus(event.target.value)}}
        onFocus={()=>handleError('status',null)}
        error={error.status?true:false}
        >
        <MenuItem value="-Select Status-">-Select Status-</MenuItem>
        <MenuItem value="Continue">Continue</MenuItem>
        <MenuItem value="Discontinue">Discontinue</MenuItem>
        <MenuItem value="Trending">Trending</MenuItem>
        <MenuItem value="Popular">Popular</MenuItem>
        </Select>
        </FormControl>
        <div className={classes.errorText}>{error.status}</div>
        </Grid>
        <Grid item xs={6}>
        <IconButton color="primary" aria-label="upload picture" component="label">
        <input  onChange={handlePicture} hidden accept="image/*" type="file" />
        <PhotoCamera />
        </IconButton> 
        <div className={classes.errorText}>{error.picture}</div>  
        </Grid>
        <Grid item xs={6}>
        <Avatar
        alt="picture"
        src={picture.file}
        sx={{ width: 56, height: 56 }}
        />
        </Grid>
        <Grid item xs={6}>
            <Button onClick={handleClick} fullWidth variant="contained" color="primary">Submit</Button>
        </Grid>
        <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary">Reset</Button>
        </Grid>
        </Grid>
        </div>
        </div>)
}