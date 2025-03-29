
const express = require("express")
const app = express();
const path = require("path")
const cookieparser = require("cookie-parser")


const PORT = 8001;
const userRoute = require("./routes/user.js")
const urlRoute = require("./routes/url.js");
const staticRouter = require("./routes/staticRouter.js")
const { connectDb } = require("./connect.js");
const {checkAuth} = require("./middlewares/auth.js")
const URL = require("./models/url.js")


connectDb("mongodb://localhost:27017/short-url")
.then(()=>{
    console.log(" database connected");
    
})
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieparser())

app.use("/url",checkAuth,urlRoute); 
app.use("/user",userRoute); 
app.use("/",checkAuth,staticRouter)

app.get("/url/:shortId",async (req,resp)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId},
        {$push:{visitHistory:{timestamp:Date.now()}
    }})

    resp.redirect(entry.redirectURL)
})




app.listen(PORT,()=>{
    console.log(`server is listening on port :${PORT}` );
    
})















