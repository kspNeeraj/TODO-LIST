const Task = require('../models/task');

//exporting the home controller so that it is accessible in the routes file
module.exports.home=    function( req ,res){
        
            Task.find({},function(err, task){
                    if(err){
                        Console.log('error in fetching');
                        return;
                    }
                    return res.render('home',{
                        title: "tasks",
                        tasks :task
                    });
            });
        
           
        }


//add dask in the todo app
 module.exports.addtask= function(req, res){

        Task.create(
            // description:req.body.description,
            // date:req.body.date     
            req.body      
    
        ,function(err,newTask){
            if(err){
                console.log('Error in creating task');
                return;
            }
            console.log('*******',newTask);
            return res.redirect('back');
    
        });
    
    
    
    }

    // delete task from the list
    module.exports.deletetask = function(req ,res){
        console.log('req.body for deletion', req.body);
        //getting the ids(_id from database) of all the checkboxes selected, locating them in the database and removing them
        let deleteData = req.body;
    
        console.log(deleteData);
        for(let key of Object.keys(deleteData)  ) {
            console.log('key for deletion', key);
            Task.findByIdAndDelete(key, function (err) { 
                if(err){
                    console.log('Error in Deleting from db');
                    return;
                }
                console.log("Item Deleted");
             })
        }
        return res.redirect('back');
    
       
    
    }