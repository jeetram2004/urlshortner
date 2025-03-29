
const shortid = require("shortid")
const URL = require('../models/url.js')

async function generateNewShortURL(req,resp){
    const body = req.body
    const shortID = shortid();
    await URL.create(
    {   
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.result._id
    })
    return resp.render('home',{idd:shortID})
}

async function handleAnalytic(req,resp) {
    const shortId = req.params.shortId;
    const result   = await URL.findOne({shortId})
    return resp.render('home',{totalClick:result.visitHistory.length, analytics:result.visitHistory})

}
module.exports={
    generateNewShortURL,
    handleAnalytic
}












