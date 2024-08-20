const mongoose = require("mongoose");

const QuesSchema = new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
   ans1:{
    type: String,
   },
   ans2:{
    type: String,
   },
   ans3:{
    type: String,
   },
   correct:{
    type:String
   }
})

const ques = mongoose.model("ques" , QuesSchema)

module.exports = ques