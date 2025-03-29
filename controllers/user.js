const {v4:uuidv4} = require("uuid")
const User = require('../models/users.js')
const {setUser} =require('../service/auth.js')



async function userSignup(req,resp){
    console.log(req.body);
    
    const {name,email,password}= req.body;
    await User.create({name,email,password})

   resp.redirect("/")
}


async function login(req,resp){
   
    const {email,password} = req.body;
    
   const result =  await User.findOne({email,password})
    if(!result) return resp.render("login",{error:"wrong info"})
        
        
    const sessionId = uuidv4();
    
    setUser(sessionId,result)
    resp.cookie("uid",sessionId)
    resp.result = result

        resp.redirect("/")

}

module.exports = {
    userSignup,
    login

}









