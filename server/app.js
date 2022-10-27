const express=require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
// const helmet = require('helmet');

const app=express();
const port = 8080;

let corsOptions= {
    origin: "http://localhost:3000"
}

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors(corsOptions));
app.use(morgan('short'));


app.use("/api",router);

// [RUN SERVER]
var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});