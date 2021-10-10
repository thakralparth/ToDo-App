const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const todo=require('./models/todoList');

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');





app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running at port: ${port}`);
});
