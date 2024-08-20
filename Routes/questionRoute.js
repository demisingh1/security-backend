const express = require("express")
const { ShowQues, InsertQues } = require("../Controller/questionController")
const route = express.Router()

route.get('/api/ques' , ShowQues)
route.post('/api/ques', InsertQues)

module.exports = route