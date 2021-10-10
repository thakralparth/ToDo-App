const Todo = require("../models/todoList");
// const todo = require("../models/todoList");

module.exports.home=function(req,res){
    // res.end('Hello World!!');
    Todo.find({},function(err,todos){
        if(err){
            console.log('Error in fetching todo task from db');
            return;
        }
        return res.render('home',{
            title:"ToDo App",
            todo_list:todos
        });
    });
}



module.exports.create=function(req,res){
    // console.log(req.body());
    // console.log(Todo);
    // res.end('inside create');
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTodo){
        if(err){
            console.log('Error in creating a contact');
            return;
        }
        console.log('********',newTodo);
        return res.redirect('back');
    });
    }


    // controller to destroy TODO

module.exports.destroy = function(req, res){
    var items=[];
    for(var key in req.body){
        items=req.body[key];
    }
    Todo.remove({_id:{$in:items}},function(err, data){
        if (err){
           throw err;
        }
        res.json(data);
    });
}
    
