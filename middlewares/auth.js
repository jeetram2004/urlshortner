
const {getUser} = require('../service/auth.js')

async function checkAuth(req,resp,next) {
        const userUid = req.cookies.uid;
        const result = getUser(userUid)
        
        req.result = result;   // here result is users credentials;
        next()

}

module.exports = {
    
    checkAuth
}















