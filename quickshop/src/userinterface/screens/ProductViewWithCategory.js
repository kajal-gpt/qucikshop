
import {useState,useEffect} from "react"
import Header from "../componenat/Header"
import { Grid } from "@mui/material"
import CategoryListComponent from "../componenat/CategoryListComponent"
import SingleProductDetails from "../componenat/SingleProductDetails"
 import { useStyles } from "../componenat/StyleCss"
import Footer from "../componenat/Footer/Footer"
import { postData,getData } from "../../administrator/services/FetchNodeServices"
import { useNavigate,useLocation } from "react-router-dom"
export default function ProductViewWithCategory(props)
{ 
  const classes = useStyles()
  const [subCategory,setSubcategory]=useState([])
    const[subCategoryId,setsubCategoryId]=useState('')
    const[subCategoryName,setsubCategoryName]=useState('')
    const[productList,setProductlist]=useState([])
  const location=useLocation()
   const navigate=useNavigate()
   //console.log("location",location.state.categoryid)

 
  const fetchAllSubcategory=async()=>{
    var result=await postData('userinterface/fetch_all_subcategory_by_categoryid',{categoryid:location.state.categoryid})
   
    setSubcategory(result.data)

  }
  const fetchAllProductSubcategory=async(scid)=>{
    var result=await postData('userinterface/fetch_all_products_by_subcategory',{subcategoryid:scid})
    console.log(result.data)
    setProductlist(result.data)

  }
  const fetchAllProductByCategory=async()=>{
    var result=await postData('userinterface/fetch_products_by_categoryid',{categoryid:location.state.categoryid})
    console.log(result.data) 
    setProductlist(result.data)

  }
 useEffect(function(){
  fetchAllProductByCategory()
  },[])
  
  const getSubCategoryId=(scid,sname)=>{
    setsubCategoryName(sname)
    setsubCategoryId(scid)
    fetchAllProductSubcategory(scid)
  } 
 
  useEffect(function(){
    
    fetchAllSubcategory()


  },[])
  const listofProducts=()=>{
    return productList.map((item)=>{
     
      return <SingleProductDetails item={item} url={"/selectproduct"}/>
  
    })
  
  }
    return(
        <div  >
          <Header />  
          <div className={classes.header1}> 
          <Grid container spacing={2}>
            <Grid item xs={2}>
             <CategoryListComponent data={subCategory} getSubCategoryId={getSubCategoryId} />
            </Grid>
            <Grid item xs={10}>
              <div className={classes.div5}>
                {subCategoryName} ({productList.length}) Items
              </div>
                <div className={classes.div3}>
            {listofProducts()}
            </div>
            </Grid>
            </Grid>  
           
          
          <div className={classes.div4}>
          <Footer/>
          </div>
         
                   

          </div>
        </div>
    )
}
