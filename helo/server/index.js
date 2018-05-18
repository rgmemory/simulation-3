const controller = require('./controller');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

let {
    CONNECTION_STRING
} = process.env

app.use(bodyParser.json());

app.get('/get', controller.get);
app.post('/register', controller.register);
app.post('/login', controller.login)

app.get('/getpost', controller.getpost)




massive(CONNECTION_STRING).then(function(db){
    console.log("db donnected");
    app.set("db", db);
})

app.listen(3005, function(){
    console.log("listening on port 3005");
})