
const express = require("express")

const {userSignup,login} = require("../controllers/user.js")

const router = express.Router()



router.post('/',userSignup);
router.post('/login',login)


module.exports = router;











