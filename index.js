const express = require('express');
const path = require('path');
const port = 8000;
const app=express();
const db=require('./config/mongoose');
const Task = require('./models/task');

//for parsing form data
app.use(express.urlencoded());

//use static files like images, css and js
app.use(express.static('./assets'));

//use express router
app.use('/' , require('./routes'));

app.set('view engine', 'ejs');

app.set('views', './views');





app.listen(port ,function(err){
    if (err){

//      console.log('Error!',err);
        console.log(`Error  in running the server : ${err}`);

    }

    console.log(`Server is running on prt : ${port}`);

});