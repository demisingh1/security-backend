require('dotenv').config();
const express = require('express');
const { connectDB } = require('./dbindex');
const app = express()
const cors = require('cors');
const quesRoute = require('./Routes/questionRoute')

//middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/' , quesRoute);


// const PORT = 8000
app.listen(process.env.PORT || 4000, ()=>{
    connectDB();
    console.log(`Server started at ${process.env.PORT}`);
})