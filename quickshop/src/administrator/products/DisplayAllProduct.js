import React from "react";
import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import { getData, serverURL } from "../services/FetchNodeServices";
import { Grid, TextField,FormControl,InputLabel,Select,MenuItem, IconButton,Avatar, Button } from "@mui/material";
import { useStyles } from "./ProductCss";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent';
import { postData } from "../services/FetchNodeServices";
import  Swal  from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { PhotoCamera } from "@mui/icons-material";
import ViewListIcon from '@mui/icons-material/ViewList'; 
export default function DisplayAllProduct(){
 
  const navigate = useNavigate()
    const classes=useStyles()
    const [productList,setProductList]=useState([])
    const[open,setOpen] = useState('')
    const [categoryList,setCategoryList] = useState([])
    const [icon, setIcon]=useState({file:'/assets/shopping-cart.png',bytes:''})
    const [categoryId,setCategoryId] = useState('')
    const [subcategoryId,setSubcategoryId] = useState('')
    const [productName,setProductName] = useState('')
    const [productId,setProductId] = useState('')
    const [oldIcon,setOldIcon]=useState('')
    const [discription,setDiscription] =useState ('')
    const [status,setStatus] =useState('')
    const [btnStatus, setButtonStatus]=useState(false)
    const [error,setError] = useState('')
    
    const [subcategoryList,setSubcategoryList] = useState([])

    useEffect(function(){
        fecthAllCategory()
    },[])

    const fecthAllCategory=async()=>{
        var result=await getData('category/category_List')
        setCategoryList(result.data)

    }

    const fecthAllSubcategory=async(cid)=>{
        var result=await postData('subcategory/subcategorylist_by_categoryid',{categoryid:cid})
        setSubcategoryList(result.data)

    }

    const handleCategoryChange=(event)=>{
        setCategoryId(event.target.value)
        fecthAllSubcategory(event.target.value)
    }

    const fillCategory=()=>{
        return categoryList.map((item)=>{

            return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>

        })
    }

    const fillSubcategory=()=>{
        return subcategoryList.map((item)=>{
     return <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>

        })
    }
      
    const handleError=(input,value)=>{
        setError((prev)=>({...prev,[input]:value}))
  
  }
  
    const validation = () => {
        var isValid = true
        if (!categoryId) {
            handleError('categoryId', 'Pls input category Id...')
            isValid = false
        }
        if (!subcategoryId) {
            handleError('subcategoryId', 'Pls input suncategory Id...')
            isValid = false
        }
        if (!productName) {
            handleError('productName', 'Pls input product name...')
            isValid = false
        }
        if (!discription) {
            handleError('discription', 'Pls input discription...')
            isValid = false
        }
        if (!status) {
            handleError('status', 'Pls input product status...')
            isValid = false
        }
        // if (!icon.bytes) {
        //     handleError('icon', 'Pls input product picture...')
        //     isValid = false
        // }
        return isValid

    }
    

    const handleEditData=async()=>{
        setOpen(false)
        if(validation())
        {
            var body={productid:productId,categoryid:categoryId,subcategoryid:subcategoryId,productname:productName,description:discription,status:status}
            var result=await postData('product/product_edit_data',body)
            if(result.status)
            {
                Swal.fire({
                  
                  icon: 'success',
                  title: result.message,
                  showConfirmButton: false,
                  timer: 2000
                })
              }
              else{
                Swal.fire({
                  
                  icon: 'error',
                  title: result.message,
                  showConfirmButton: false,
                  timer: 2000
                })
              }
            }
            fetchProductList()
        }

        const handleDelete=async()=>{
            setOpen(false)
        
        
          var body={productid:productId}
          var result=await postData('product/product_delete',body)
         if(result.status)
         {
           Swal.fire({
             
             icon: 'success',
             title: result.message,
             showConfirmButton: false,
             timer: 2000
           })
         }
         else{
           Swal.fire({
             
             icon: 'error',
             title: result.message,
             showConfirmButton: false,
             timer: 2000
           })
         }
        
        fetchProductList()
            
        }

        const fetchProductList=async()=>{
            var result=await getData('product/product_List')
            setProductList(result.data)
        }
        const handlePicture=(event)=>{
            setIcon({file:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})
            handleError('picture',null)
            setButtonStatus(true)
      }
      const handleEditIcon=async()=>{
        setButtonStatus(false)
        setOpen(false)
        var formData= new FormData()
        formData.append('productid',productId)
        formData.append('picture',icon.bytes)
         var result= await postData('product/producticon',formData)
         if(result.status)
         {
           Swal.fire({
             
             icon: 'success',
             title: result.message,
             showConfirmButton: false,
             timer: 2000
           })
         }
         else{
           Swal.fire({
             
             icon: 'error',
             title: result.message,
             showConfirmButton: false,
             timer: 2000
           })
         }
       
         fetchProductList()
    
      }
      const handleCancel=()=>{
        setIcon({file:`${serverURL}/images/${oldIcon}`,bytes:''})
        setButtonStatus(false)
    
    }
    function showProduct(){
      return (
        <MaterialTable
          title="Product List"
          columns={[
            { title: 'Product Id', field: 'productid' },
            { title: 'Category Name', field: 'categoryname' },
            { title: 'Sub Category Name', field:'subcategoryname'},
            { title: 'Product Name', field:'productname'},
            { title: 'Description', field:'description'},
            { title: 'Status', field: 'status' },
            { title: 'Picture', field: 'picture',
              render:rowData=><Avatar src={`${serverURL}/images/${rowData.picture}`} style={{width:75}} variant="rounded"/>}
           
          ]}
          data={productList}        
          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit Icon',
              onClick: (event, rowData) => handleOpen(rowData)
            },
            {
              icon: 'add',
              isFreeAction:true,
              tooltip: 'Add Product',
              onClick: (event) => navigate('/dashboard/productadd')
            }
          ]}
        />
      )
        }

      const showProductForm=()=>{
        return (
            <div className={{ width:'30vw',
            height:'auto',
            padding:15,
            background:'#fff',
            borderRadius:10}} >
                <div className={classes.box}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className={classes.headingStyle}>
                                Add New Product
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                        <FormControl fullWidth>
                <InputLabel id="demo-simple-select-lable">Categories</InputLabel>
                <Select
                  lableId="demo-simple-select-lable"
                  id="demo-simple-select"
                  value={categoryId}
                  label="Categories"
                  onFocus={()=>handleError('categoryid',null)}
                  error={error.categoryId?true:false} 
                  onChange={handleCategoryChange}
                  >
                    <MenuItem>Select Category</MenuItem>
                    {fillCategory()}
                 </Select>
                 </FormControl>  
                           
                        </Grid>
                        <Grid item xs={6}>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Subcategories</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={subcategoryId}
                                label="Subcategories"
                                onFocus={()=>handleError('subcategoryid',null)}
                                error={error.subcategoryId?true:false} 
                                onChange={(event)=>{setSubcategoryId(event.target.value)}}
                            >
                                <MenuItem>-Select Subcategories-</MenuItem>
                                {fillSubcategory()}
                            </Select>
                        </FormControl>
                    </Grid>
                        <Grid item xs={6}>
                            <TextField value={productName} error={error.productName ? true : false} onFocus={() => handleError('productName', null)} helperText={error.productName} onChange={(event) => { setProductName(event.target.value) }} label="Product Name" variant='outlined' fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField value={discription} error={error.discription ? true : false} onFocus={() => handleError('discription', null)} helperText={error.discription} onChange={(event) => { setDiscription(event.target.value) }} label="Discription" variant='outlined' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Status"
                                    onChange={(event)=>{setStatus(event.target.value)}}
                                    onFocus={()=>handleError('status',null)}
                                    error={error.status?true:false}
                                >
                                    <MenuItem value="-Select Status-">-Select Status-</MenuItem>
                                    <MenuItem value='Continue'>Continue</MenuItem>
                                    <MenuItem value='Discontinue'>Discontinue</MenuItem>
                                    <MenuItem value='Popular'>Popular</MenuItem>
                                    <MenuItem value='Trending'>Trending</MenuItem>
                                </Select>
                            </FormControl>
                            
    <div className={classes.errorText}>{error.status}</div>
                        </Grid>
                        <Grid item xs={4}>
               {btnStatus?<>
                <Button onClick={handleEditIcon}>Save</Button>
                <Button onClick={handleCancel}>Cancel</Button></>:<></>}
            </Grid> 
             <Grid item xs={4}>
              <IconButton  color="primary" aria-label="upload picture" component="label">
             <input onChange={handlePicture} hidden accept="image/*" type="file" />
               <PhotoCamera />
               </IconButton>
               <div className={classes.errorText}>{error.picture}</div>
              </Grid>
              <Grid item xs={4}>
              <Avatar
               alt="Icon"
               src={icon.file}
               style={{ width: 58, height: 58 }}
               variant="rounded"
                  />
              </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleEditData} variant='contained' fullWidth>Edit</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleDelete} variant='contained' fullWidth>Delete</Button>
                        </Grid>
    
                    </Grid>
                </div>
            </div>
        );
      }

    useEffect(function(){
        fetchProductList()
    },[])

    const handleClose=()=>{
      setOpen(false)
    }
    const handleOpen=(rowData)=>{
      fecthAllSubcategory(rowData.categoryid)
        setProductId(rowData.productid)
        setCategoryId(rowData.categoryid)
       setSubcategoryId(rowData.subcategoryid)
        setProductName(rowData.productname)
        setDiscription(rowData.description)
        setStatus(rowData.status) 
        setIcon({file:`${serverURL}/images/${rowData.picture}`,bytes:''})
        setOldIcon(rowData.picture)
        
       setOpen(true)
    }

    const displayProductDialog=()=>{
        return(
        <Dialog 
        open={open}
        onClose={handleClose}>
            <DialogTitle>Edit/Delete Product</DialogTitle>
            <DialogContent>{showProductForm()}</DialogContent>
            <DialogActions><Button onClick={handleClose}>Cancel</Button></DialogActions>
        </Dialog>
        );
    }

    return(
        
        <div className={classes.displaycontainer}>
            <div className={classes.displaybox}>
        { showProduct()}
        </div>
        { displayProductDialog()}
        </div>
    )
}