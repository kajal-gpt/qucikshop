var express = require('express');
var router = express.Router();
var pool = require("./pool")
var upload = require("./multer")

router.get('/fetch_all_banners', function(req, res, next) {
    try{
        pool.query("select * from banners where status='Show'",function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result[0]})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.get('/fetch_footer_category', function(req, res, next) {
    try{
        pool.query("select * from category ",function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.post('/fetch_all_category', function(req, res, next) {
    try{
        pool.query("select * from category where status=?",[req.body.status],function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.post('/fetch_products_by_subcategory', function(req, res, next) {
    try{
        pool.query("select L.* from list L where L.subcategoryid in (select subcategoryid from subcategory where subcategoryname=?)",[req.body.subcategoryname],function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.post('/fetch_all_subcategory_by_categoryid', function(req, res, next) {
    try{
        pool.query("select * from subcategory where categoryid=?",[req.body.categoryid],function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.post('/fetch_all_products_by_subcategory', function(req, res, next) {
    try{
        pool.query("select L.* from list L where L.subcategoryid=?",[req.body.subcategoryid],function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.post('/fetch_products_by_categoryid', function(req, res, next) {
    try{
        pool.query("select L.* from list L where L.categoryid=?",[req.body.categoryid],function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.post('/fetch_all_products_by_productid', function(req, res, next) {
    try{
        pool.query("select L.* from list L where L.productid=?",[req.body.productid],function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.post('/fetch_all_images_by_productid', function(req, res, next) {
    try{
        pool.query("select * from productpicture  where productlistid=?",[req.body.productlistid],function(error,result){
          if(error)
          {
             return res.status(200).json({status:false,data:[]})  
          }
          else
          {
              return res.status(200).json({status:true,data:result})  
        
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }
  });
  router.post('/fetch_all_multipleimages_by_productid', function(req, res, next) {
    try{
      pool.query("select * from productpicture where productlistid=?",[req.body.productlistid],function(error,result){
        if(error)
        {console.log(error)
           return res.status(200).json({status:false,data:[]})  
        }
        else
        { console.log(result)
            return res.status(200).json({status:true,data:result})  
      
        }
     })
  
  
    }
    catch(e)
    {
      return res.status(200).json({status:false,data:[]})  
  
    }  });


    router.post('/check_mobile_no', function(req, res, next) {
      try{
        pool.query("select * from userinfo where mobileno=?",[req.body.mobileno],function(error,result){
          if(error)
          {console.log(error)
             return res.status(200).json({status:false,data:[]})  
          }
          else
          { 
              if(result.length==0)
              return res.status(200).json({status:false,data:[]})  
              else
              return res.status(200).json({status:true,data:result})  
          }
       })
    
    
      }
      catch(e)
      {
        return res.status(200).json({status:false,data:[]})  
    
      }  });
  
  
      router.post('/check_address_by_mobile_no', function(req, res, next) {
        try{
          pool.query("select * from useraddress where mobileno=?",[req.body.mobileno],function(error,result){
            if(error)
            {console.log(error)
               return res.status(200).json({status:false,data:[]})  
            }
            else
            { 
                if(result.length==0)
                return res.status(200).json({status:false,data:[]})  
                else
                return res.status(200).json({status:true,data:result})  
            }
         })
      
      
        }
        catch(e)
        {
          return res.status(200).json({status:false,data:[]})  
      
        }  });
  
  router.post('/add_address', function(req, res, next) {
        try{
          pool.query("insert into userinfo(mobileno,emailid)values(?,?)",[req.body.mobileno,req.body.emailid],function(error,result){
            if(error)
            {console.log(error)
               return res.status(200).json({status:false,data:[]})  
            }
            else
            { console.log('RESULT:',result)  
              
              pool.query("insert into useraddress (userid, emailid, mobileno, addressone, addresstwo, city, state, pincode, username, addressstatus) values(?,?,?,?,?,?,?,?,?,?)",[result.insertId,req.body.emailid,req.body.mobileno,req.body.addressone,req.body.addresstwo,req.body.city,req.body.state,req.body.pincode,req.body.username,req.body.addressstatus],function(error,result){
                if(error)
                {
                  return res.status(200).json({status:false,data:[]})  
                }
                else
                {
                  return res.status(200).json({status:true,data:result})  
                }}
                )

              }
  
            
         })
      
      
        }
        catch(e)
        {
          return res.status(200).json({status:false,data:[]})  
      
        }  });
  


module.exports=router;