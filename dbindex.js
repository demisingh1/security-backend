const mongoose = require("mongoose");

 async function connectDB(){
    mongoose.connect(process.env.DBCONNECTION)
    .then(()=> console.log("Db connected") )
    .catch((error)=>{console.log(error)})
}

module.exports = {connectDB}