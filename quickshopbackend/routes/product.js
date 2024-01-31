var express = require('express');
var router = express.Router();
var pool = require("./pool")
var upload = require("./multer");


router.post('/productAddsubmit', upload.single('picture'), function (req, res, next) {
    try {
        pool.query("insert into product (categoryid,subcategoryid,productname,description,status,picture) values(?,?,?,?,?,?)", [req.body.categoryid, req.body.subcategoryid, req.body.productname, req.body.description, req.body.status, req.file.filename], function (error, result) {

            if (error) {
                console.log(error)
                return res.status(500).json({ status: false, message: 'Server Error(database)...' })
            }
            else {
                return res.status(200).json({ status: true, message: 'Subctegory Submitted Successfully...' })
            }
        })
    }
    catch (e) {
        return res.status(200).json({ status: false, message: 'Server Not Responding Plz Contect Server administrator...' })
    }
});

router.get('/product_List', function (req, res, next) {
    try {
        pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid)as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid)as subcategoryname from product P", function (error, result) {

            if (error) {
                console.log(error)
                return res.status(500).json({ status: false, data:[] })
            }
            else {
                return res.status(200).json({ status: true,data:result })
            }
        })
    }
    catch (e) {
        return res.status(200).json({ status: false, data:[] })
    }
});

router.post('/product_edit_data',upload.single('picture'), function (req, res, next) {
    try {
        pool.query("update product set categoryid=?,subcategoryid=?, productname=?, description=?, status=? where productid=?", [req.body.categoryid, req.body.subcategoryid, req.body.productname, req.body.description, req.body.status, req.body.productid], function (error, result) {

            if (error) {
                console.log(error)
                return res.status(500).json({ status: false, message: 'Server Error(database)...' })
            }
            else {
                return res.status(200).json({ status: true, message: 'Subctegory Submitted Successfully...' })
            }
        })
    }
    catch (e) {
        return res.status(200).json({ status: false, message: 'Server Not Responding Plz Contect Server administrator...' })
    }
});

router.post('/product_delete',upload.single('picture'), function (req, res, next) {
    try {
        pool.query("delete from product where productid=?", [ req.body.productid], function (error, result) {

            if (error) {
                console.log(error)
                return res.status(500).json({ status: false, message: 'Server Error(database)...' })
            }
            else {
                return res.status(200).json({ status: true, message: 'Subctegory Submitted Successfully...' })
            }
        })
    }
    catch (e) {
        return res.status(200).json({ status: false, message: 'Server Not Responding Plz Contect Server administrator...' })
    }
});
router.post('/producticon',upload.single('picture'), function(req, res, next) {
    try{
        pool.query("update product set picture=? where productid=?",[req.file.filename,req.body.productid],function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,message:'server Error(Database).....'})
            }
            else{
                return res.status(200).json({status:true,message:'picture Updated successfuly.....'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'server not responding pls contact server admin.....'})
    }
});

router.post('/product_list_by_subcategoryid',function(req,res,next){

    try
    {
        pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid)as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid)as subcategoryname from product P where P.subcategoryid=?",[req.body.subcategoryid],function(error,result){
        if(error)
        {
            return res.status(200).json({status:false,data:[]})
        }
        else{
            return res.status(200).json({status:true,data:result})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,data:[]})
    }
});
module.exports = router;