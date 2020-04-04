//creating model and schema for our database
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required: true
    },
    date:{
        type: String ,
        required:true
    },
    category:{
        type: String,
        required: true

    }
    
} );

//Creating and exporting out schema
const Task = mongoose.model('Task',taskSchema);

module.exports = Task;