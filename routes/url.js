
const express = require("express")

const {generateNewShortURL,handleAnalytic} = require("../controllers/url.js")

const router = express.Router()



router.post('/',generateNewShortURL);
router.get('/analytics/:shortId',handleAnalytic)


module.exports = router;











