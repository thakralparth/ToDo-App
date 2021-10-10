const mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todoApp_db');

//acquire the connection
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up an running then print the message
db.once('open',function(){
    console.log('Successfully connected to database');
})