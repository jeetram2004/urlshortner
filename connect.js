
const mongoose = require("mongoose")

async function connectDb(dbURL){
   return mongoose.connect(dbURL);

}


module.exports = {
    connectDb
}














