const controller = require('./controller');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

let {
    CONNECTION_STRING
} = process.env


massive(CONNECTION_STRING).then(function(db){
    console.log("db donnected");
    app.set("db", db);
})

app.listen(3005, function(){
    console.log("listening on port 3005");
})