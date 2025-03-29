
const express = require("express")
const app = express();
const URL = require('../models/url.js')

 
const router = express.Router()

router.get('/', async (req,resp)=>{
    if(!req.result) return resp.redirect("/login")
    const  allurls = await URL.find({createdBy:req.result._id});
    
    return resp.render('home',{urls:allurls})
})

router.get('/signup',(req,resp)=>{

    resp.render("signup");


})
router.get('/login',(req,resp)=>{

    resp.render("login");


})





module.exports = router;






