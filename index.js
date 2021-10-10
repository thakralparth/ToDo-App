const express=require('express');
const app=express();
const port=8000;

// requiring mongoose to setup db
const db=require('./config/mongoose');


const todo=require('./models/todoList');

// to read requests
app.use(express.urlencoded());

// use express router
app.use('/',require('./routes'));

// to set static files
app.use(express.static('assets'));

//set up ejs as our view engine
app.set('view engine','ejs');
app.set('views','./views');

//Starting express server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running at port: ${port}`);
});
