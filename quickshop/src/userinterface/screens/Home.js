
import {useState,useEffect} from "react"
import Header from "../componenat/Header"
import { useStyles } from "../componenat/StyleCss"
import BannerComponants from "../componenat/BannerComponants"
import CricleScrollComponent from "../componenat/CricleScrollComponent"
import ProductComponent from "../componenat/ProductComponent"
import DealSlider from "../componenat/DealSlider"
import Footer from "../componenat/Footer/Footer"
import { postData,getData } from "../../administrator/services/FetchNodeServices"
export default function Home(props)
{  
  const [banners,setBanners]=useState([])
  const [category,setCategory]=useState([])
  const [productMilk,setProductMilk]=useState([])
  const [tranding,setTranding]=useState([])
  const fetchAllBanners=async()=>{
    var result=await getData('userinterface/fetch_all_banners')
    var images= result.data.banners.split(",")
    setBanners(images)
    }
    
    const fetchAllCategories=async(status)=>{
      var result=await postData ('userinterface/fetch_all_category',{status:status})
      if(status=='Continue')
      setCategory(result.data)
      else if(status=='Trending')
      setTranding(result.data)
      }
      const fetchAllproduct=async(subcategoryname)=>{
        var result=await postData('userinterface/fetch_products_by_subcategory',{subcategoryname:subcategoryname})
        setProductMilk(result.data)
        }

    useEffect(function(){
       fetchAllBanners()
       fetchAllCategories('Continue')
       fetchAllCategories('Trending')
       fetchAllproduct('Milk, Bread & Butter')
    },[])
   
  const classes=useStyles()
    return(
        <div>
         
          <Header />
          <div className={classes.banner}>
        
            <div className={classes.images}> 
        <BannerComponants images={banners}/>
          </div>
       
          <div className={classes.images}> 
        <DealSlider />
          </div> 
          <div className={classes.componants}>
          <CricleScrollComponent category={category} title="Popular Categories"/>
          </div>
          <div className={classes.componants}>
          <ProductComponent title="Milk, Bread & Butter" products={productMilk}/>
          </div>
          <div className={classes.componants}>
          <CricleScrollComponent category={tranding} title="Tranding Products"/>
          </div>
          <div className={classes.componants}>
            <Footer/>
          </div>
          
          </div>
        </div>
    )
}