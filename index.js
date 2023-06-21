const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())
//MonGoDB Connection
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url,{
    useNewUrlParser : true
})
    .then(() => {
        console.log("Successfully connected to the database");
    }). catch(err => {
            console.log("Successfully Conneccted to the database");
    }).catch*(err => {
        console.log('Could not connect to the datbase. Existing now....', err);
        process.exit();
    });



app.get('/', (req, res)=>{
    res.json({
        "message": "successfull!"
    })
})
require('./app/routes/student.routes')(app);

app.listen(4000, () =>{
    console.log('Server is Working Por ahora');
})